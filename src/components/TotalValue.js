import React from "react";
import {BsArrowDown} from "react-icons/bs";
import "../index.css";
import TotalvalueSingle from "./TotalvalueSingle";
import {targetData} from "../assets/data";

function TotalValue() {
    return (
    <div>
    <div class="setTargetLastDivParent-width">
    <div className="setTargetLastDivParent">
      <div className="setTargetFirstDiv"><p><span>Total: </span><span>240</span></p></div>
      <div>
        <div className="setTargetLastDiv"><p>Set Target</p><p>2024 <span><BsArrowDown/></span></p></div>
      </div>
      </div>
      <div className="totalValue-header">
            <div><p>Target</p></div>
            <div><p>Growth</p></div>
            <div><p>Margin</p></div>
            <div><p>Dist</p></div>
            <div><p>Budget</p></div>
    </div>
    </div>
    {targetData.map((item,index)=>{
      return <TotalvalueSingle key={index} targetData={item}/>
    })}
    {/* <TotalvalueSingle  targetData={targetData}/> */}
    </div>
  );
}

export default TotalValue;
