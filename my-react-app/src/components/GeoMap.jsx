import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";
import BlankMap from "./BlankMap";

export default function GeoMap() {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch("/world.geojson") // You can replace with any valid path or URL
      .then((res) => res.json())
      .then(setGeoData)
      .catch((err) => console.error("Failed to load GeoJSON", err));
  }, []);

  return (
    <BlankMap>
      {geoData && (
        <GeoJSON
          data={geoData}
          style={{
            color: "#333",
            weight: 1,
            fillColor: "#5dade2",
            fillOpacity: 0.6,
          }}
        />
      )}
    </BlankMap>
  );
}
