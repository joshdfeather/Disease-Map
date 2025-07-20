const indicators = {
  "Life Expectancy": {
    key: "life",
    api: "http://localhost:4000/api/life-expectancy",
    label: "Life Expectancy",
    unit: "years",
    minYear: 2000,
    maxYear: 2021,
  },
  "People Living with HIV": {
    key: "hiv",
    api: "http://localhost:4000/api/hiv",
    label: "People Living with HIV",
    unit: "people",
    minYear: 2000,
    maxYear: 2023,
  },
};

export default indicators;
