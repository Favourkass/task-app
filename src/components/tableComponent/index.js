import React from "react";
import { useState } from "react";

const TableComponent = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            textAlign: "right",
            backgroundColor: activeIndex === 0 ? "rgb(233, 215, 155)" : "rgb(228, 221, 196)",
            padding: "10px",
            paddingLeft: "90px",
            paddingRight: "90px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => setActiveIndex(0)}
        >
          Actual Budget
        </div>
        <div
          style={{
            textAlign: "right",
            backgroundColor: activeIndex === 1 ? "rgb(233, 215, 155)" : "rgb(228, 221, 196)",
            padding: "10px",
            paddingLeft: "90px",
            paddingRight: "90px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => setActiveIndex(1)}
        >
          Actual Budget
        </div>
      </div>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }}
      >
        <div style={{ padding: "8px", textAlign: "left", fontWeight:'bold' }}>
          Main Function Code & Description
        </div>
        <div style={{ padding: "8px", textAlign: "right", fontWeight:'bold' }}>
          Value (Jan - June 2022) <br /> ₦
        </div>
        <div style={{ padding: "8px", textAlign: "right", fontWeight:'bold' }}>
          Percentage Allocation
          <br />
          (Jan - June 2022) <br />%
        </div>
        <div style={{ padding: "8px", textAlign: "right", fontWeight:'bold' }}>
          Value (Jan - June 2022) <br /> ₦
        </div>
        <div style={{ padding: "8px", textAlign: "right", fontWeight:'bold' }}>
          Percentage Allocation
          <br />
          (Jan - June 2022) <br />%
        </div>
      </div>
      {data.map((row) => (
        <div
          key={row.department}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            width: "100%",
          }}
        >
          <div style={{ padding: "8px", textAlign: "left" }}>
            {row.vacantPositions}
          </div>
          <div style={{ padding: "8px", textAlign: "right" }}>
            {row.department}
          </div>
          <div style={{ padding: "8px", textAlign: "right" }}>
            {row.vacantPositions}
          </div>
          <div style={{ padding: "8px", textAlign: "right" }}>
            {row.allocation}
          </div>
          <div style={{ padding: "8px", textAlign: "right" }}>
            {row.percentage}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableComponent;
