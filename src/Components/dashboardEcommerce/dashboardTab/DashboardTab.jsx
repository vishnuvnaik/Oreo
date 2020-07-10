import React from "react";
import ProductReport from "../ProductReport";
import DashboardChart2 from "../DashboardChart2";
import AnnualReportChart from "../AnnualReportChart";
import Chartmap from "../chartMap/Chartmap";
import Recentorders from "../RecentOrders";
import "./Dashboardtab.scss";
const Dashboard = () => {
  return (
    <div className="dashboardTab">
      <ProductReport />
      <DashboardChart2 />
      <AnnualReportChart />
      <Chartmap />
      <Recentorders />
    </div>
  );
};

export default Dashboard;
