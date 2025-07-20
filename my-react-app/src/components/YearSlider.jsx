import indicators from "../constants/indicators.js";

export default function YearSlider({ selected, year, onChange }) {
  const { minYear, maxYear } = indicators[selected];

  return (
    <div className="slider">
      <label htmlFor="year-slider">
        Year: <span>{year}</span>
      </label>
      <input
        type="range"
        id="year-slider"
        min={minYear}
        max={maxYear}
        value={year}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </div>
  );
}
