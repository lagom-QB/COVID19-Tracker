import React from "react";
// eslint-disable-next-line
import { Bar, Line, Doughnut, Polar, Radar } from "react-chartjs-2";
import randomColor from "randomcolor";

const Chart = ({ data }) => {
  const { positive, negative, totalTestResults } = data;

  const dataStructure = {
    positive,
    negative,
    total: totalTestResults,
  };

  const mixed = {
    labels: Object.keys(dataStructure),
    datasets: [
      {
        type: "line",
        data: Object.values(dataStructure),
        label: "Line Chart",
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
        label: "Bar Chart",
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
    <div style={{fontFamily: "monospace", textAlign:"center", overflow: "hidden", padding: '3em'}}>
        <div>
            <Bar data={mixed} width="auto" />
        </div>   
    </div>
  );
};

export default Chart;
