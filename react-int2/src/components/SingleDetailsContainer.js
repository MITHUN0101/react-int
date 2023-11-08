import React,{useEffect,useState} from 'react';
import {BsArrowDownUp} from "react-icons/bs";
import SingleDetails from './SingleDetails.js';
import DetailsHeading from './DetailsHeading.js';

function SingleDetailsContainer({yearCount}) {
  const [apiData,setApiData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setApiData(data.products);
      });
  }, []);
  if(Array.isArray(apiData)){
    var val3 = apiData.map((item,index)=>{
        return {
            target: item.stock,
            act: item.price,
            growth:item.discountPercentage,
            gap:item.rating,
            margin: item.rating,
            dist: item.stock,
            budget: item.price,
            budgetPercent: item.stock,
          }
      })
      var val4 = val3.slice(0,10);
  }
  return (
    <div>
    {/* <div className="singleDetails-header-year"><span>2020</span><BsArrowDownUp/></div> */}
    <DetailsHeading yearCount={yearCount}/>
      {val4.map((item,index)=>{
        return <SingleDetails key={index} data={item}/>
      })}
    </div>
  )
}

export default SingleDetailsContainer;
