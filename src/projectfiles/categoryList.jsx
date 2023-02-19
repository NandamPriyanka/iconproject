import react from "react";
import CardLi from "./cradli";
export const CategoryList=(props)=>{
    console.log(props)
 return (<div>
 {props.list.map((e)=><CardLi details={e}/>)}
 </div>)
}
