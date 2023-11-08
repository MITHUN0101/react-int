import React, { useState,useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {BsArrowLeft,BsArrowRight} from "react-icons/bs";
import { productGroup,productGroup1 } from "../assets/data";
import ProductGroupList from "./ProductGroupList";
import ProductGroupHeader from "./ProductGroupHeader";
function ProductGroup() {
    const [tabChange,setTabCange] = useState(true);
    const [collapseBar,setCollapseBar] = useState(true);
    const [apiDataNew,setApiDataNew] = useState([]);
    function handleCollapse(){
        setCollapseBar(prev=>!prev);
    }
    function changeTab(){
        setTabCange(prev=>!prev);
    }
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setApiDataNew(data.products);
      });
  }, []);
//   const val2 = apiData;  
  if(Array.isArray(apiDataNew)){
    var val3 = apiDataNew.map((item,index)=>{
         return { product: `Product Group ${String.fromCharCode(64 + item.id)}`, productVal: item.discountPercentage }
      })
      // var val5 = val3.slice(0,10);
  }
  console.log("------------------mith---------------")
  // console.log(val5,"mith2");
  return (
    <div className={!collapseBar?"productGroup-toggle productFormate":"productFormate"}>
    <div className="productGroupHeader-height">
    <div class="productArrow" onClick={handleCollapse}><span>{collapseBar?<BsArrowLeft/>:<BsArrowRight/>}</span></div>
      <ProductGroupHeader/>
    </div>
      <div className="productGroup-header-div">
        <div className="productGroup-header">
          <div className="search-div">
            <input type="text" placeholder="Search E.G Product" />
            <div>
              <AiOutlineSearch />
            </div>
          </div>
        </div>
        <div className="productTab">
          <div className={tabChange?"productTabColor":null} onClick={changeTab}>
            <p>Product Structure</p>
          </div>
          <div className={!tabChange?"productTabColor":null} onClick={changeTab}>
            <p>Brand</p>
          </div>
        </div>
      </div>
      <div className="productGroup">
        <ul>
          {tabChange?<ProductGroupList productGroup={val3.slice(0,10)}/>:<ProductGroupList productGroup={val3.slice(10,20)}/>}
        </ul>
      </div>
    </div>
  );
}

export default ProductGroup;
