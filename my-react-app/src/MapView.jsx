import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import GeoMap from "./components/GeoMap";
import indicators from "./constants/indicators";

export default function MapView() {
  const [geoData, setGeoData] = useState(null);
  const [selected, setSelected] = useState("Life Expectancy");
  const [selectedYearLife, setSelectedYearLife] = useState(
    indicators["Life Expectancy"].maxYear
  );
  const [selectedYearHIV, setSelectedYearHIV] = useState(
    indicators["People Living with HIV"].maxYear
  );
  const allLifeData = useRef({});
  const allHivData = useRef({});

  const selectedKey = indicators[selected].key;
  const currentYear =
    selectedKey === "life" ? selectedYearLife : selectedYearHIV;
  const activeData =
    selectedKey === "life"
      ? allLifeData.current[currentYear] || {}
      : allHivData.current[currentYear] || {};

  useEffect(() => {
    fetch("/world.geojson")
      .then((res) => res.json())
      .then(setGeoData)
      .catch((err) => console.error("Failed to load GeoJSON", err));
  }, []);

  useEffect(() => {
    const fetchIndicatorData = async (indicator, ref, setYear) => {
      try {
        const res = await fetch(indicator.api);
        const { value } = await res.json();
        const grouped = {};
        for (const { TimeDimensionValue, SpatialDim, NumericValue } of value) {
          const year = +TimeDimensionValue;
          if (!grouped[year]) grouped[year] = {};
          grouped[year][SpatialDim] = NumericValue;
        }
        ref.current = grouped;
        const latest = Math.max(...Object.keys(grouped).map(Number));
        setYear(latest);
      } catch (err) {
        console.error(`Failed to fetch ${indicator.label}`, err);
      }
    };
    fetchIndicatorData(
      indicators["Life Expectancy"],
      allLifeData,
      setSelectedYearLife
    );
    fetchIndicatorData(
      indicators["People Living with HIV"],
      allHivData,
      setSelectedYearHIV
    );
  }, []);

  const handleYearChange = (year) => {
    if (selectedKey === "life") {
      setSelectedYearLife(year);
    } else {
      setSelectedYearHIV(year);
    }
  };

  return (
    <>
      <Header
        selected={selected}
        setSelected={setSelected}
        selectedYear={currentYear}
        onYearChange={handleYearChange}
      />
      <div className="map-wrapper">
        <GeoMap
          geoData={geoData}
          activeData={activeData}
          selected={selected}
          selectedYear={currentYear}
        />
      </div>
    </>
  );
}
