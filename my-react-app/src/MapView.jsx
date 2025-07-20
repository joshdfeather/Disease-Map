import Header from "./components/Header";
import { useState } from "react";
import indicators from "./constants/indicators";
import GeoMap from "./components/GeoMap";

export default function MapView() {
  const [selected, setSelected] = useState("Life Expectancy");
  const [selectedYear, setSelectedYear] = useState(
    indicators[selected].maxYear
  );

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  return (
    <>
      <Header
        selected={selected}
        setSelected={setSelected}
        selectedYear={selectedYear}
        onYearChange={handleYearChange}
      />
      <GeoMap />
    </>
  );
}
