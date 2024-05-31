import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Data usage per network",
        data: [0.8, 3.4, 5.4, 3, 7, 4, 5, 8],
        borderColor: "black",
        fill: true,
        tension: 0.6,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            label += `${context.raw} GB`;
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: string | number | null) => `${value}GB`,
        },
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="w-[835px] h-[443px] mb-5">
        {" "}
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Graph;
