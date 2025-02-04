import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import "chart.js/auto";

const chartDataPerDay = {
  labels: [
    "12AM", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11",
    "12PM", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12AM"
  ],
  datasets: [
    {
      label: "Visits",
      data: [50, 80, 60, 120, 140, 180, 120, 80, 50, 100, 150, 120, 60, 50, 80, 140, 180, 160, 120, 80, 100, 50, 120, 180, 140],
      fill: true,
      backgroundColor: "rgba(66, 165, 245, 0.2)", // Light blue
      borderColor: "rgba(66, 165, 245, 1)", // Blue line
      tension: 0.4, // Smooth curve
    },
  ],
};

const chartDataPerWeek = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Visits",
      data: [50, 80, 60, 120, 140, 180],
      fill: true,
      backgroundColor: "rgba(66, 165, 245, 0.2)", // Light blue
      borderColor: "rgba(66, 165, 245, 1)", // Blue line
      tension: 0.4, // Smooth curve
    },
  ],
};

const chartDataPerMonth = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Visits",
      data: [200, 250, 180, 220],
      fill: true,
      backgroundColor: "rgba(66, 165, 245, 0.2)", // Light blue
      borderColor: "rgba(66, 165, 245, 1)", // Blue line
      tension: 0.4, // Smooth curve
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: { display: false }, // Hides gridlines for X-axis
    },
    y: {
      min: 0,
      max: 400, // Set the max value of the y-axis to 400
      ticks: { stepSize: 50 }, // Adjust step size if needed
    },
  },
  plugins: {
    legend: { display: false }, // Hides the legend
  },
};

const ChartSection = () => {
  const [chartData, setChartData] = useState('perDay'); // Default to 'perDay'

  const handleChartRangeChange = (e) => {
    setChartData(e.target.value);
  };

  const getChartData = () => {
    if (chartData === 'perDay') return chartDataPerDay;
    if (chartData === 'perWeek') return chartDataPerWeek;
    if (chartData === 'perMonth') return chartDataPerMonth;
    return chartDataPerDay; // fallback
  };

  return (
    <div className="chart-section">
      <div className="chart-controls flex justify-between items-center px-4 py-2">
        <h2 className="text-xl font-semibold">Candidate Visits</h2>
        <select
          className="chart-range-selector"
          value={chartData}
          onChange={handleChartRangeChange}
        >
          <option value="perDay">Per Day</option>
          <option value="perWeek">Per Week</option>
          <option value="perMonth">Per Month</option>
        </select>
      </div>
      <div className="chart-container" style={{ height: '35vh', width: '48vw' }}>
        <Line data={getChartData()} options={chartOptions} />
      </div>
    </div>
  );
};

export default ChartSection;
