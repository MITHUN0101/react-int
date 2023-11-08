import React from 'react'
import {BsArrowDownUp} from "react-icons/bs";
function DetailsHeading({yearCount}) {
  return (
    <div class="singleDetails-header-height">
            <div className="singleDetails-header-year"><span>{2020+yearCount}</span><BsArrowDownUp/></div>
            <div className="singleDetails-header">
            <div><p>target</p></div>
            <div><p>act</p></div>
            <div><p>growth%</p></div>
            <div><p>gap%</p></div>
            <div><p>margin</p></div>
            <div><p>dist</p></div>
            <div className="singleDetailsBudget"><p>budget <span className="budjectPercent">%</span></p></div>
    </div>
    </div>
  )
}

export default DetailsHeading
