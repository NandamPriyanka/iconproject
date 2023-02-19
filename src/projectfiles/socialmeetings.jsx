import CardLi from "./cradli";
import Data from "./data.json"
const VideoMeeting=()=>{
    return (<div class="nameIng">
    {
        Data?.filter((details)=>details.integrationInfo.category==="Social Integrations")?.map((e)=><CardLi details={e}/>)
    }
    </div>)
}

export default VideoMeeting