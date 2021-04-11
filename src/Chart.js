import React from "react";
// eslint-disable-next-line
import { Bar, Line, Doughnut, Polar } from "react-chartjs-2";
import randomColor from "randomcolor";

const Chart = ({ data }) => {
  const { positive, negative, totalTestResults } = data;

  const dataStructure = {
    positive,
    negative,
    total: totalTestResults,
  };

  const PChartDataConfig = {
    labels: Object.keys(dataStructure),
    hoverOffset: 4,
    animateScale: true,
    animateRotate: true,
    datasets: [
      {
        data: Object.values(dataStructure),
        label: "COVID-19 Test Results Polar Chart",
        backgroundColor: [randomColor(0.9), randomColor(0.6), randomColor(0.3)],
        borderColor: "grey",
        pointBorderColor: randomColor(0.1),
        pointBackgroundColor: randomColor(0.4),
        pointBorderWidth: 0.2,
        hoverBackgroundColor: "rgba(255,99,132,0.8)",
        borderAlign: "inner",
      },
    ],
  };

  const mixed = {
    labels: Object.keys(dataStructure),
    title: {
      display: true,
      text: "Bar and Line COVID Chart",
    },
    datasets: [
      {
        type: "line",
        data: Object.values(dataStructure),
        label: "COVID-19 Test Results Line Chart",
        fill: false,
        tension: 0.2,
        backgroundColor: "rgba(255,99,132,0.4)",
        borderColor: randomColor(0.9),
        pointBorderColor: randomColor(0.1),
        pointBackgroundColor: randomColor(0.4),
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        pointStyle: "star",
        pointRadius: 10,
        pointHoverRadius: 10,
        order: 1,
      },
      {
        type: "bar",
        label: "COVID-19 Test Results Line Chart",
        data: Object.values(dataStructure),
        backgroundColor: "cyan",
        borderColor: "grey",
        borderWidth: 0.5,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        order: 2,
      },
    ],
  };

  return (
    <div>
      <div>
        <Polar data={PChartDataConfig} width="auto" />
        <Bar data={mixed} width="auto" />
      </div>
    </div>
  );
};

export default Chart;
