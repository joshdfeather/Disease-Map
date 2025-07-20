# 🌍 WHO Indicator Map

An interactive world map built with React and Leaflet that visualizes WHO health metrics (e.g. Life Expectancy, HIV prevalence) by country and year.

---

## Features

- Interactive GeoJSON-based world map
- Toggle between health indicators (e.g. Life Expectancy, HIV)
- Select year using a dynamic slider
- Choropleth coloring based on indicator value
- Tooltips with per-country data
- Built with React, Leaflet, and a clean component structure

---

## Tech Stack

- **Frontend**: React + Vite + React Leaflet
- **Mapping**: Leaflet.js + GeoJSON
- **Styling**: CSS (custom or Tailwind optional)
- **Data Source**: Local API (assumed to run on `localhost:4000`)

---

## Project Structure

```bash
src/
├── components/
│ ├── Header.jsx # Header made up of Indicator Selector and Year slider...
│ ├── IndicatorSelector.jsx
│ ├── YearSlider.jsx
│ ├── GeoMap.jsx # Visual map rendering with GeoJSON
│ ├── BlankMap.jsx # Base map container
├── constants/
│ └── indicators.js # Available WHO indicators and config
├── utils/
│ └── getColor.js # Color scale logic by indicator
├── App.css # Global styles
├── MapView.jsx # App logic & state manager
└── main.jsx
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Start the frontend

```bash
npm run dev
```

### 3. Start the server

```bash
cd server
node server.js
```
