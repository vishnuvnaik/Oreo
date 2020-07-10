import React from "react";
import ProductLayout from "../productLayout/ProductLayout";
import ReactMapGl, { NavigationControl, GeolocateControl } from "react-map-gl";
import mobiledata from "./DashboardMap.json";
import "../../../../node_modules/mapbox-gl/dist/mapbox-gl.css";
import "../DashboardEcom.scss";

const Chartmap = () => {
  const viewport = {
    height: "400px",
    width: "100%",
    latitude: 12.9716,
    longitude: 77.5946,
    zoom: 0.5,
  };
  return (
    <div className="annual-container">
      <ProductLayout name="Top" secndName="Selling Country" close>
        <div style={{ padding: "20px", height: "100%", width: "100%" }}>
          <ReactMapGl
            {...viewport}
            mapStyle="mapbox://styles/mapbox/light-v9"
            mapboxApiAccessToken="pk.eyJ1IjoidmlzaG51OTc5Nzk3IiwiYSI6ImNrY2cxejNqNDBud3MyeHBjamJybXRzNmsifQ.gSGWl4lQY4b5ePsn1Rcjew"
          />
        </div>
      </ProductLayout>
      <ProductLayout width="31.5%">
        <div className="rowFlexMap">
          <div className="bodyChartmap">
            <div className="rowTopMap">
              <div className="tableContainer">
                <table>
                  <thead>
                    <tr>
                      <th align="Left" className="tableHeading">
                        Contrary
                      </th>
                      <th align="Left" className="tableHeading">
                        2016
                      </th>
                      <th align="Left" className="tableHeading">
                        2017
                      </th>
                      <th align="Left" className="tableHeading">
                        Change
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {mobiledata.MapDetails.map((data) => {
                      return (
                        <tr key={data.id}>
                          <td className="tableHeading">{data.contrary} </td>
                          <td className="tableHeading">{data.year1}</td>
                          <td className="tableHeading">{data.year2}</td>
                          <td className="tableHeading">{data.change}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </ProductLayout>
    </div>
  );
};

export default Chartmap;
