import React from "react";
import "handsontable/dist/handsontable.full.css";
import Handsontable from "handsontable";
import { HotTable } from "@handsontable/react";
import { Bar, Line, Doughnut, Polar } from "react-chartjs-2";
import randomColor from "randomcolor";

const Chart = ({ data }) => {
  const {
    positive,
    negative,
    totalTestResults,
    death,
    hospitalized,
    state,
  } = data;

  const dataStructure = {
    positive,
    negative,
    total: totalTestResults,
    death,
    hospitalized,
  };

  /*  {
    "date":20210307,
    "state":"AK",
    "positive":56886,
    "probableCases":null,
    "negative":null,
    "pending":null,
    "totalTestResultsSource":"totalTestsViral",
    "totalTestResults":1731628,
    "hospitalizedCurrently":33,
    "hospitalizedCumulative":1293,
    "inIcuCurrently":null,
    "inIcuCumulative":null,
    "onVentilatorCurrently":2,
    "onVentilatorCumulative":null,
    "recovered":null,
    "lastUpdateEt":"3/5/2021 03:59",
    "dateModified":"2021-03-05T03:59:00Z",
    "checkTimeEt":"03/04 22:59",
    "death":305,
    "hospitalized":1293,
    "hospitalizedDischarged":null,
    "dateChecked":"2021-03-05T03:59:00Z",
    "totalTestsViral":1731628,
    "positiveTestsViral":68693,
    "negativeTestsViral":1660758,
    "positiveCasesViral":null,
    "deathConfirmed":null,
    "deathProbable":null,
    "totalTestEncountersViral":null,
    "totalTestsPeopleViral":null,
    "totalTestsAntibody":null,
    "positiveTestsAntibody":null,
    "negativeTestsAntibody":null,
    "totalTestsPeopleAntibody":null,
    "positiveTestsPeopleAntibody":null,
    "negativeTestsPeopleAntibody":null,
    "totalTestsPeopleAntigen":null,
    "positiveTestsPeopleAntigen":null,
    "totalTestsAntigen":null,
    "positiveTestsAntigen":null,
    "fips":"02",
    "positiveIncrease":0,
    "negativeIncrease":0,
    "total":56886,
    "totalTestResultsIncrease":0,
    "posNeg":56886,
    "dataQualityGrade":null,
    "deathIncrease":0,
    "hospitalizedIncrease":0,
    "hash":"dc4bccd4bb885349d7e94d6fed058e285d4be164",
    "commercialScore":0,
    "negativeRegularScore":0,
    "negativeScore":0,
    "positiveScore":0,
    "score":0,
    "grade":""
},  
    */

  const labels_ = Object.keys(dataStructure);
  const data_ = Object.values(dataStructure);

  console.log(
    "Data information: ------",
    data_,
    typeof data,
    labels_,
    typeof labels_
  );

  const PChartDataConfig = {
    labels: labels_,
    hoverOffset: 4,
    animateScale: true,
    animateRotate: true,
    datasets: [
      {
        data: data_,
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
    labels: labels_,
    title: {
      display: false,
      text: "Bar and Line COVID Chart",
    },
    datasets: [
      {
        type: "line",
        data: data_,
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
        data: data_,
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
    <div
      style={{
        fontFamily: "monospace",
        textAlign: "center",
        overflow: "hidden",
        padding: "3em",
      }}
    >
      <div
        id="table_"
        style={{
          display: "table-row",
          width: "50%",
          paddingRight: "10px",
          overflow: "hidden",
        }}
      >
        <HotTable
          id="hot"
          settings={{
            data: data_,
            colHeaders: labels_,
            licenseKey: "non-commercial-and-evaluation",
          }}
        />
        <Polar data={PChartDataConfig} width="auto" paddingLeft="10px" />
        <Bar data={mixed} width="fit-content" />
      </div>
    </div>
  );
};

export default Chart;
