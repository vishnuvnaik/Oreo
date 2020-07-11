import React from "react";
import ProductLayout from "./productLayout/ProductLayout";
import ReactMapGl, { NavigationControl, GeolocateControl } from "react-map-gl";
import dataMap from "./chartMap/DashboardMap.json";
import "./DashboardEcom.scss";
const Recentorders = () => {
  const viewport = {
    height: "400px",
    width: "100%",
    latitude: 12.9716,
    longitude: 77.5946,
    zoom: 0.5,
  };
  return (
    <div className="annualContainer">
      <ProductLayout name="Recent" secndName="orders" close>
        <div style={{ padding: "20px", height: "100%", width: "100%" }}>
          <table>
            <thead>
              <tr>
                <th align="Left" className="hashStyle">
                  #
                </th>
                <th align="Left" className="nameStyle">
                  Name
                </th>
                <th align="Left" className="itemStyle">
                  Item
                </th>
                <th align="Left" className="addressStyle">
                  Address
                </th>
                <th align="Left" className="qualityStyle">
                  Quality
                </th>
                <th align="Left" className="statusStyle">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {dataMap.PhoneDetails.map((data) => {
                return (
                  <tr key={data.id}>
                    <td className="hashStyle">
                      <div className="greyBoxStyle"></div>
                    </td>
                    <td className="nameStyle">{data.Name}</td>
                    <td className="itemStyle">{data.Item}</td>
                    <td className="addressStyle">{data.Address}</td>
                    <td className="qualityStyle">{data.Quality}</td>
                    <td className="statusStyle">
                      <div>
                        {data.Status === "DONE" ? (
                          <span className="greenStyle">{data.Status}</span>
                        ) : data.Status === "PENDING" ? (
                          <span className="orangeStyle">{data.Status}</span>
                        ) : (
                          <span className="greyStyle">{data.Status}</span>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </ProductLayout>
    </div>
  );
};
export default Recentorders;
