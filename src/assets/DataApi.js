// import React, { useEffect, useState } from "react";

// function DataApi() {
//   const [apiData,setApiData] = useState({});
//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((data) => {
//         return data.json();
//       })
//       .then((data) => {
//         setApiData(data.products);
//       });
//   }, []);
// //   const val2 = apiData;  
//   if(Array.isArray(apiData)){
//     var val3 = apiData.map((item,index)=>{
//         return {
//             key:index,
//             target: 14,
//             act: item.price,
//             growth:item.discountPercentage,
//             gap:item.rating,
//             margin: item.budget,
//             dist: item.stock,
//             budget: item.id,
//             budgetPercent: item.budget,}
//       })
//   }
//   console.log("------------------mith---------------")
//   console.log(val3,"mith");
//   return <div style={{color:"red",fontSize:"50px"}}>123</div>;
// }

// export default DataApi;
