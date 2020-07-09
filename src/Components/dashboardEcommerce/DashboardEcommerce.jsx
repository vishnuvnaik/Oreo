import React from "react";
import { Bar } from "react-chartjs-2";
import "./DashboardEcom.scss";

const mobile = [1, 2, 6, 5, 5, 5, 6, 9, 0, 6, 6, 2];
const laptop = [0, 1, 3, 5, 1, 2, 2, 3, 4, 6, 6, 5];
const tablet = [1, 2, 3, 4, 1, 2, 2, 0, 4, 0, 3, 4];
const state = {
  labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  datasets: [
    {
      label: "Mobile",
      data: mobile,
      backgroundColor: "slategrey",
    },
    {
      label: "Laptop",
      data: laptop,
      backgroundColor: "#f3c623",
    },
    {
      label: "Tablet",
      data: tablet,
      backgroundColor: "#8c99e0",
    },
  ],
};
const option = {
  animation: {
    duration: 5,
  },
  scales: {
    xAxes: [
      {
        stacked: true,
        gridLines: { display: false },
        barPercentage: 0.4,
      },
    ],
    yAxes: [
      {
        stacked: true,
      },
    ],
  },
  legend: { display: true, postion: "right" },
};

export default class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div
        style={{ top: "-65px", position: "relative", backgroundColor: "white" }}
      >
        <div className="report">
          <div className="report-div">
            <i></i>
            <div>
              <span>Sales Report</span>
              <h1>$4,516</h1>
            </div>
          </div>
          <div className="report-div">
            <i></i>
            <div>
              <span>Annual Revenue</span>
              <h1>$6,481</h1>
            </div>
          </div>
          <div className="report-div">
            <i></i>
            <div>
              <span>Total Profit</span>
              <h1>$3,915</h1>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "20px",
          }}
        >
          <Bar className="barHeight" data={state} options={option} />
        </div>
      </div>
    );
  }
}
