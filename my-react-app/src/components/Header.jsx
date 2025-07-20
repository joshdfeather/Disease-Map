import indicators from "../constants/indicators";

export default function Header({
  selected,
  setSelected,
  selectedYear,
  onYearChange,
}) {
  return (
    <header className="header">
      <div className="controls">
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

        <div className="slider">
          <label htmlFor="year-slider">
            Year: <span>{selectedYear}</span>
          </label>
          <input
            type="range"
            id="year-slider"
            min={indicators[selected].minYear}
            max={indicators[selected].maxYear}
            value={selectedYear}
            onChange={(e) => onYearChange(parseInt(e.target.value))}
          />
        </div>
      </div>
    </header>
  );
}
