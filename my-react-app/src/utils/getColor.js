const getColor = (value, selected) => {
  if (value == null) return "#cccccc";

  if (selected === "Life Expectancy") {
    return value > 80
      ? "#084081"
      : value > 75
      ? "#0868ac"
      : value > 70
      ? "#2b8cbe"
      : value > 65
      ? "#4eb3d3"
      : value > 60
      ? "#7bccc4"
      : value > 50
      ? "#a8ddb5"
      : "#ccebc5";
  }

  if (selected === "People Living with HIV") {
    return value > 7000000
      ? "#08306b"
      : value > 3000000
      ? "#2171b5"
      : value > 1000000
      ? "#6baed6"
      : value > 500000
      ? "#9ecae1"
      : value > 100000
      ? "#c6dbef"
      : "#eff3ff";
  }

  return "#ffffff";
};

export default getColor;
