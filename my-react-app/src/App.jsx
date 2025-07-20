import { useState } from "react";
import "./App.css";
import BlankMap from "./components/BlankMap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BlankMap />
    </>
  );
}

export default App;
