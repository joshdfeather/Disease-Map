import { useState } from "react";
import "./App.css";
import MapView from "./MapView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MapView />
    </>
  );
}

export default App;
