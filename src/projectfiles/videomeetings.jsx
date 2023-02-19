import React from "react";
import { useState } from "react";
import { CategoryWise } from "../helperfunction/helperfunction";
import { CategoryList } from "./categoryList";
import CardLi from "./cradli";
// import Data from "./data.json"
const VideoMeeting=()=>{
    const [Data,setdata]=useState(CategoryWise())
    console.log(Data)
    return (<div className="nameIng">
    {
    Object.keys(Data).map((e)=><CategoryList list={Data[e]}/>)
    }
    </div>)
}

export default VideoMeeting