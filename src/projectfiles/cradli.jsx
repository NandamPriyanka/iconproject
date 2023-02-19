import React from "react";

const CardLi=(props)=>{
  console.log(props)
  return (<div class="matter">
  <div class="firstLine">
     <img src={props?.details?.integrationInfo.imgUrl} alt="image" class="image"></img>
  
     <p>{props?.details?.integrationInfo.name}</p>
  </div>
     <p>{props?.details?.platform.description}</p>
  </div>)
}
export default CardLi