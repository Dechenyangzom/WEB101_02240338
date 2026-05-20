# Practical 7 Reflection

## What I learned

- Built a responsive data visualisation dashboard using React and Vite.
- Practiced using two chart libraries: `recharts` for line and pie charts, and `react-chartjs-2` with `chart.js` for line and bar charts.
- Learned how to separate data from presentation by storing sample sales and customer metrics in `src/data/salesData.js`.
- Worked with React hooks (`useState` and `useEffect`) to prepare chart data dynamically for Chart.js components.
- Applied responsive layout and reusable component design to keep the dashboard organized.

## What went well

- The dashboard successfully displays four different chart types in a clean grid layout.
- Data formatting and tooltips improved the dashboard’s readability and made key insights easy to understand.
- Using `ResponsiveContainer` from Recharts made the charts adapt smoothly to available space.

## Challenges faced

- Combining two charting libraries in one app required careful handling of different component APIs and registration steps.
- Ensuring the Chart.js components rendered with responsive height and correct scales involved extra configuration.
- Choosing how to present the data clearly, especially for stacked customer acquisition bars and target-based sales lines.

## Improvements for next time

- Add real interactive filters for date range, category selection, or product type.
- Introduce a summary panel with KPIs such as total sales, average visitors, and conversion rates.
- Replace random weekly visitor generation with a consistent dataset or API-backed source.
- Improve accessibility by adding descriptive labels and keyboard-friendly chart interactions.

## Overall reflection

This practical strengthened my understanding of React-based data visualisation and how chart libraries can be integrated into a modern frontend. It also reinforced the value of building reusable components and keeping data logic separate from UI rendering.