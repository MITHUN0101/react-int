import React from 'react';
import {targetData} from "../assets/data"

function TotalvalueSingle({targetData}) {
    const { target, growth, margin, dist, budget,  budgetChange } = targetData;
    const colorValue = {
        negative: "#f59994",
        positive: "#12d965",
    }

  return (
    <div className={target ==="+"?"singleDetails-div opacitySingle":"singleDetails-div"}>
      <div className="totalValueSingle singleDetails">
        <div class="totalValueSingleTarget">
          <p style={{ color: colorValue.lightBlue }}>{target}</p>
        </div>
        <div>
          <p
            style={
              growth >= 0
                ? { color: colorValue.positive }
                : { color: colorValue.negative }
            }
          >
            {growth>0?"+":null}{growth}%
          </p>
        </div>
        <div>
          <p style={{ color: colorValue.white }}>{margin}%</p>
        </div>
        <div>
          <p style={{ color: colorValue.white }}>{dist}</p>
        </div>
        <div className="singleDetailsBudget">
          <p style={{ color: colorValue.white }}>
            {budget}{" "}
          </p>
          <span style={{ color: colorValue.white }} className="budjectPercent">
              {budgetChange}%
            </span>
        </div>
      </div>
    </div>
  )
}

export default TotalvalueSingle
