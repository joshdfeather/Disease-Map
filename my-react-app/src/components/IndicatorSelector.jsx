import indicators from "../constants/indicators.js";

export default function IndicatorSelector({ selected, setSelected }) {
  return (
    <div className="selector">
      <label htmlFor="indicator-select">WHO Metric:</label>
      <select
        id="indicator-select"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {Object.keys(indicators).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
}
