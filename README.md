# Practical 7: Data Visualisation

A React dashboard built with Vite that demonstrates data visualisation using `recharts` and `react-chartjs-2`.

## Project Overview

This practical showcases a sales analytics dashboard with four visual reports:

- **Monthly Sales Performance** — line chart comparing sales, profit, and target values.
- **Product Category Distribution** — pie chart showing sales share by product category.
- **Customer Acquisition** — stacked bar chart comparing new and returning customers.
- **Weekly Visitors** — line chart displaying weekly visitor traffic.

Data is stored in `src/data/salesData.js`, and charts are rendered using reusable React components in `src/components`.

## Tech Stack

- React 19
- Vite
- Recharts
- Chart.js + react-chartjs-2
- date-fns
- ESLint

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build & Preview

- Build production assets:

```bash
npm run build
```

- Preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `src/App.jsx` — main dashboard layout and chart container.
- `src/components/MonthlySalesChart.jsx` — Recharts line chart.
- `src/components/ProductCategoryChart.jsx` — Recharts pie chart.
- `src/components/CustomerAcquisitionChart.jsx` — Chart.js stacked bar chart.
- `src/components/WeeklyVisitorsChart.jsx` — Chart.js line chart.
- `src/data/salesData.js` — static sample data for dashboard charts.

## Notes

- Charts are responsive and designed to display inside a flexible grid layout.
- The dashboard is a good starting point for practising data visualisation and dashboard UI design.
=======
# WEB101_02240338
>>>>>>> ea89b127985daabf26a7380efdec34703dc94d04
