import React from "react";
import { DataUsage, Assessment, LocalAtm } from "@material-ui/icons";
import ProductLayout from "./ProductLayout";
import { Bar } from "react-chartjs-2";
import "./DashboardEcom.scss";

const ProductReport = () => {
  const mobile = [2, 4, 10, 10, 10, 10, 12, 15, 0, 10, 10, 4];
  const laptop = [0, 2, 6, 10, 2, 4, 4, 6, 8, 10, 8, 5];
  const tablet = [2, 4, 6, 8, 2, 4, 6, 0, 4, 0, 6, 8];
  const version = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const data = {
    labels: version,
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
    responsive: true,

    animation: {
      duration: 10,
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
    legend: { display: true, position: "bottom" },
  };
  return (
    <ProductLayout name="Product" secndName="Report">
      <div className="report">
        <div className="report-div">
          <i>
            <DataUsage />
          </i>
          <div>
            <span>Sales Report</span>
            <h1>$4,516</h1>
          </div>
        </div>
        <div className="report-div">
          <i>
            <Assessment />
          </i>
          <div>
            <span>Annual Revenue</span>
            <h1>$6,481</h1>
          </div>
        </div>
        <div className="report-div">
          <i>
            <LocalAtm />
          </i>
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
        <Bar className="barHeight" data={data} options={option} />
      </div>
    </ProductLayout>
  );
};

export default ProductReport;
