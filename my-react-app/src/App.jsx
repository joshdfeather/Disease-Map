import { useState } from "react";
import "./App.css";
import GeoMap from "./components/GeoMap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GeoMap />
    </>
  );
}

export default App;
