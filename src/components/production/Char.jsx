import React from "react";
import { CanvasJSChart } from "canvasjs-react-charts";

//const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Char = () => {
  const toggleDataSeries = (e) => {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chart.render();
  };

  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Evening Sales in a Restaurant",
    },
    axisX: {
      valueFormatString: "DDD",
    },
    axisY: {
      prefix: "$",
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: "pointer",
      itemclick: toggleDataSeries,
    },
    data: [
      {
        type: "stackedBar",
        name: "Meals",
        showInLegend: true,
        xValueFormatString: "",
        yValueFormatString: "$#,##0",
        dataPoints: [
          //   { x: "06:00", y: 45 },
          //   { x: "07:00", y: 54 },
          //   { x: "08:00", y: 67 },
          { x: new Date(2018, 5, 25), y: 56 },
          { x: new Date(2018, 5, 26), y: 45 },
          { x: new Date(2018, 5, 27), y: 71 },
          { x: new Date(2018, 5, 28), y: 41 },
          { x: new Date(2018, 5, 29), y: 60 },
          { x: new Date(2018, 5, 30), y: 75 },
          { x: new Date(2018, 6, 1), y: 98 },
        ],
      },
      // Add more data series as needed
    ],
  };

  let chart;

  return (
    <div>
      <CanvasJSChart options={options} onRef={(ref) => (chart = ref)} />
      {/* You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods */}
    </div>
  );
};

export default Char;
