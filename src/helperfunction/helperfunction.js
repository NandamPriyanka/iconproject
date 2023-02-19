import data from "../projectfiles/data.json"

export const CategoryWise=()=>{
    const dataObj={}

for(let i=0;i<data.length;i++){
   if(dataObj[data[i].integrationInfo.category]){
   dataObj[data[i].integrationInfo.category].push(data[i])
   //dataObj["Social Media"]
   }
   else{
      dataObj[data[i].integrationInfo.category]=[]
      dataObj[data[i].integrationInfo.category].push(data[i])
   }
}
return dataObj
}
