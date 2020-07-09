import React from "react";
import ProductReport from "./ProductReport";
import DashboardChart2 from "./DashboardChart2";
import AnnualReportChart from "./AnnualReportChart";
const Dashboard = () => {
  return (
    <div
      style={{ top: "-50px", position: "relative", backgroundColor: "beige" }}
    >
      <ProductReport />
      <DashboardChart2 />
      <AnnualReportChart />
    </div>
  );
};

export default Dashboard;
