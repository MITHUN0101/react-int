import React,{useEffect,useState,} from "react";
import "../index.css";
function SingleDetails({ data }) {
  const { target, act, growth, gap, margin, dist, budget, budgetPercent } =
    data;
  // const {id} = apiData[0];
  const color = {
    negative: "#f59994",
    positive: "#12d965",
    lightBlue: "#90bdf9",
    white: "#fff",
  };
  return (
    <div class="singleDetails-div">
      <div className="singleDetails">
        <div>
          <p style={{ color: color.lightBlue }}>{target}</p>
        </div>
        <div>
          <p style={{ color: color.white }}>{act}</p>
        </div>
        <div>
          <p
            style={
              growth >= 0
                ? { color: color.positive }
                : { color: color.negative }
            }
          >
            {growth}%
          </p>
        </div>
        <div>
          <p
            style={
              growth > 0
                ? { color: color.positive }
                : { color: color.negative }
            }
          >
            {gap}%
          </p>
        </div>
        <div>
          <p style={{ color: color.white }}>{margin}</p>
        </div>
        <div>
          <p style={{ color: color.white }}>{dist}</p>
        </div>
        <div className="singleDetailsBudget">
          <p style={{ color: color.white }}>
            {budget}{" "}
            <span style={{ color: color.white }} className="budjectPercent">
              {budgetPercent}%
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleDetails;
