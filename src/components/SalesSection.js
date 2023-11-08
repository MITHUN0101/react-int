import React from 'react'
import {MdOutlineLock,MdOutlineLockOpen} from "react-icons/md";
import {data} from "../assets/data"
function SalesSection() {
  return (
    <div>
        <div className="sales-section">
        <div className="saleSection-div-head"><div className='saleSection-div-head-icon'><MdOutlineLock/></div><div>SALES CHANNEL</div></div>
        {data.map((item,index)=>{
            return <div className="saleSection-div" key={index}>
            <div className="saleSection-div-icon"><MdOutlineLockOpen/></div>
            <div><p>Sales Channel {index+1}</p></div>
        </div>
        })}
    </div>
    </div>
  )
}

export default SalesSection
