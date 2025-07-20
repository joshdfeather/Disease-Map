import IndicatorSelector from "./IndicatorSelector";
import YearSlider from "./YearSlider";

export default function Header({
  selected,
  setSelected,
  selectedYear,
  onYearChange,
}) {
  return (
    <header className="header">
      <div className="controls">
        <IndicatorSelector selected={selected} setSelected={setSelected} />
        <YearSlider
          selected={selected}
          year={selectedYear}
          onChange={onYearChange}
        />
      </div>
    </header>
  );
}
