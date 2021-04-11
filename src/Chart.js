import React from 'react'
// eslint-disable-next-line
import { Bar, Line, Doughnut, Polar } from "react-chartjs-2";
import randomColor from "randomcolor";

const Chart = ({data}) => {
    const {positive, negative, totalTestResults} = data

    const dataStructure = {
        positive,
        negative,
        total: totalTestResults,
    }

    const HChartDataConfig = {
        labels: Object.keys(dataStructure),
        datasets: [
            {
                data: Object.values(dataStructure),
                label: "COVID-19 Test Results Bar",
                backgroundColor: "cyan",
                borderColor: "grey",
                borderWidth: 0.5,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
            }
        ]
    };

    const LChartDataConfig = {
        responsive: true,
        type: 'line',
        labels: Object.keys(dataStructure),
        title: {
            display: true,
            text: "Covid Test Results",
        },
        datasets: [
            {
                data: Object.values(dataStructure),
                label: "COVID-19 Test Results Line Chart",
                //fill: false,
                tension: 0.2,
                backgroundColor : "rgba(255,99,132,0.4)",
                borderColor : randomColor(0.9),
                pointBorderColor: randomColor(0.1),
                pointBackgroundColor : randomColor(0.4),
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                pointStyle: "star",
                pointRadius: 15,
                pointHoverRadius: 15 
            }
        ]
    }

    const PChartDataConfig = {
        labels: Object.keys(dataStructure),
        hoverOffset : 4,
        animateScale: true,
        animateRotate: true,
        datasets: [{
            data : Object.values(dataStructure),
            label: "COVID-19 Test Results Polar Chart",
            backgroundColor : [randomColor(0.9), randomColor(0.6), randomColor(0.3)],
            borderColor : "grey",
            pointBorderColor: randomColor(0.1),
            pointBackgroundColor : randomColor(0.4),
            pointBorderWidth: 0.2,
            hoverBackgroundColor : "rgba(255,99,132,0.8)",
            borderAlign: "inner",

        }
    ],
    }

    return (
        <div style={{display: 'flex', 'flexDirection': 'column', overflow: 'hidden'}}>
            <Bar data={HChartDataConfig} width="auto"/>
            <Line data={LChartDataConfig} width="auto"/>
            <Polar data={PChartDataConfig} width="auto"/>
        </div>
    )
}

export default Chart