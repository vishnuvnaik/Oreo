import React, { useState } from "react";
import { MoreHoriz, Close } from "@material-ui/icons";
import "./ProductLayout.scss";

const ProductLayout = (props) => {
  const [display, setDisplay] = useState(true);
  return (
    <div
      className={display ? "container-style" : "container-style display-none"}
      style={{
        width: props.width ? props.width : null,
      }}
    >
      <div className="container-div">
        <div className="text">
          <span className="text-span">{props.name} </span>
          <span>{props.secndName}</span>
        </div>
        <div>
          {!props.close ? (
            <i>
              <MoreHoriz />
            </i>
          ) : null}
          {!props.close ? (
            <i onClick={() => setDisplay(false)}>
              <Close />
            </i>
          ) : null}
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default ProductLayout;
