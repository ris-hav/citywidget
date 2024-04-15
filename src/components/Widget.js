import React from "react";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

{
  ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip
  );
}

const Widget = ({ city }) => {
  const chartData = {
    labels: ["'20", "'21", "'22", "'23", "'24", "'25"],
    datasets: [
      {
        label: "Density",
        data: city.density,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        pointRadius: 5,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
        pointHoverBorderColor: "rgba(225, 225, 225, 1)",
        tension: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        // backgroundColor: "#fff",
        // bodyColor: "#000",
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: city.min,
        ticks: {
          stepSize: 2,
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <Link to={`/detail/${city.id}`} className="link-style">
      <div className="widget">
        <h2>{city.name}</h2>
        <p>Area: {city.area} sq mi</p>
        <p>
          {" "}
          Density:{" "}
          {(
            [city.density.reduce((acc, curr) => acc + curr, 0)] /
            city.density.length
          ).toPrecision(6)}{" "}
          per sq mi
        </p>
        <div className="line-chart">
          <Line data={chartData} options={options} />
        </div>
        {/* <Link to={`/detail/${city.id}`}>View Details</Link> */}
      </div>
    </Link>
  );
};

export default Widget;
