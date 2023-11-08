import React, { useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import { LiaAngleDownSolid } from "react-icons/lia";
import { BsFilter } from "react-icons/bs";
import { MdOutlineFilterAlt } from "react-icons/md";
function TopHeader() {
  const [visibleModel,setVisibleModel] = useState(false);
  const [visibleModelYear,setVisibleModelYear] = useState(false);
  function visibleModelFunc(){
    setVisibleModel(prev=>!prev)
  }
  function toggleYearFilter(){
    setVisibleModelYear(prev=>!prev);
  }
  return (
    <div className="topheader">
      <div>
        <div className="topheader1">
          <p>Target Setup</p>
          <h3>2024</h3>
        </div>
      </div>
      <div className="topheader2">
        <div className="topheader2a">
          <p>
            Class A{" "}
            <span>
              <LiaAngleRightSolid />
            </span>
          </p>
          <p>
            Product Group A{" "}
            <span>
              <LiaAngleRightSolid />
            </span>
          </p>
          <p>
            Sub-Group A{" "}
            <span>
              <LiaAngleRightSolid />
            </span>
          </p>
          <p>
            Category 1{" "}
            <span>
              <LiaAngleRightSolid />
            </span>
          </p>
        </div>
        <div className="topheader2b">
          <div className="topheader2b-toggle">
            <p>Quater</p>
            <span className="togglePage"></span>
          </div>
          <div className="advanceFilter">
            <span><BsFilter/></span>
            <span>Advance Filter :</span>
            <span onClick={visibleModelFunc} class="toggleFilter"><LiaAngleDownSolid/></span>
            {/* <div class={visibleModel?"FilterModal-div":"invisible"}>
              <div className="FilterModal">
                <ul>
                  <li><span className="colorWhite"></span> Margin</li>
                  <li><span className="colorWhite"></span> Distribution</li>
                  <li><span className="colorWhite"></span> Budget</li>
                </ul>
              </div>
            </div> */}
          </div>
          <div className="compareYears">
            <span><MdOutlineFilterAlt/></span>
            <span>Compare Years :</span>
            <span>2020 <LiaAngleDownSolid/></span>
            {/* <div class={visibleModelYear?"yearfilterModal-div":"invisible"}>
              <div className="yearfilterModal">
                <ul>
                  <li>Margin</li>
                  <li>Distribution</li>
                  <li>Budget</li>
                </ul>
              </div>
            </div> */}
            <span>to</span>
            <span className="lastDateFilter">2024 <LiaAngleDownSolid/></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
