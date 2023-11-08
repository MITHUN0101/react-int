import React,{useState,useEffect} from 'react'
import { productGroup } from "../assets/data";
import { BiCaretRight } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
function ProductGroupList({productGroup}) {
  
  return (
    <>
        {productGroup.map((item, index) => {
            return (
              <li key={index}>
                <div className="productGroup-single">
                  <div className="productGroup-single-first">
                    <div className="productGroup-single-first-icon1">
                      <BiCaretRight />
                    </div>
                    <div className="productGroup-single-first-icon2">
                      <TbArrowBadgeRightFilled />
                    </div>
                    <div>
                      <p>{item.product}</p>
                    </div>
                  </div>
                  <div className="productGroup-single-second">
                    <AiFillStar />
                    <p>{item.productVal}</p>
                  </div>
                </div>
              </li>
            );
          })}
    </>
  )
}

export default ProductGroupList
