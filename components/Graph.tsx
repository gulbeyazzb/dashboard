import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface ChartState {
  series: {
    name: string;
    data: number[];
  }[];
  options: ApexOptions;
}

const Graph: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const state: ChartState = {
    series: [
      {
        name: "Data usage",
        data: [1.5, 0.8, 3.0, 5.4, 3, 2, 4, 8],
      },
    ],
    options: {
      legend: {
        show: false,
      },

      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: ["#000000"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        labels: {
          style: {
            colors: "#00000066",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        max: 10,
        min: 0,
        tickAmount: 4,
        axisBorder: {
          color: "#0000000D",
        },
        labels: {
          align: "right",
          formatter: (value: number) => `${value} GB`,

          style: {
            colors: "#00000066",
            fontSize: "12px",
          },
        },
      },
      tooltip: {
        enabled: true,
        marker: {
          show: false,
        },
      },

      plotOptions: {
        radialBar: {
          track: {
            background: "black",
          },
        },
      },
    },
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto pb-16">
      <div className="w-full lg:w-[825px] bg-white rounded-2xl flex flex-col gap-4 justify-center shadow-lg p-2">
        <h4 className="text-gray-700 text-sm font-semibold p-4 pb-0">
          Data usage per network
        </h4>
        <div id="chart">
          <ReactApexChart
            type="line"
            options={state.options}
            series={state.series}
            height={400}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    </div>
  );
};

export default Graph;
