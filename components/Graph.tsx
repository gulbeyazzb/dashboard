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
    labels: ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Data usage per network",
        data: ["", 1.5, 0.8, 3.4, 5.4, 3, 2.5, 4, 8],
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
        beginAtZero: false,
        ticks: {
          callback: (value: string | number | null) => `${value}GB`,
        },
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto pb-16 ">
      <div className="w-[825px] bg-white rounded-2xl flex flex-col gap-4 justify-center">
        <h4 className="text-status_text text-sm font-semibold p-4 pb-0">
          Data usage per network
        </h4>
        <div className="pt-4 p-4">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Graph;
