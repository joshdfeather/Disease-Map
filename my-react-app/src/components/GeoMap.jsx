import { GeoJSON, ScaleControl } from "react-leaflet";
import BlankMap from "./BlankMap";
import indicators from "../constants/indicators";
import getColor from "../utils/getColor";

export default function GeoMap({
  geoData,
  activeData,
  selected,
  selectedYear,
}) {
  const styleFeature = (feature) => {
    const iso3 = feature.properties.ADM0_A3;
    const val = activeData[iso3];
    return {
      fillColor: getColor(val, selected),
      weight: 0.5,
      color: "black",
      fillOpacity: 0.8,
    };
  };

  const onEachFeature = (feature, layer) => {
    const iso3 = feature.properties.ADM0_A3;
    const name = feature.properties.ADMIN;
    const value = activeData[iso3];
    const { unit, label } = indicators[selected];
    const formatValue = (val, unit) => {
      if (val == null) return null;
      return unit === "people" ? val.toLocaleString() : val.toFixed(1);
    };
    const display = formatValue(value, unit);
    const tooltip = display
      ? `<strong>${name}</strong><br/>${label} (${selectedYear}): ${display} ${unit}`
      : `<strong>${name}</strong><br/><i>No data for ${selectedYear}</i>`;
    layer.bindTooltip(tooltip, { sticky: true });
  };

  return (
    <BlankMap>
      {geoData && (
        <>
          <GeoJSON
            key={`${selected}-${selectedYear}`}
            data={geoData}
            style={styleFeature}
            onEachFeature={onEachFeature}
          />
          <ScaleControl position="bottomleft" />
        </>
      )}
    </BlankMap>
  );
}
