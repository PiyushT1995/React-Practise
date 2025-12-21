import { useState } from "react";
function DashboardCard({title,description}){
  const[isExpanded,setIsExpanded]=useState(false);
  return(
    <div>
      <h3>{title}</h3>

      <button onClick={()=>setIsExpanded(!isExpanded)}>{isExpanded?"Hide":"Show"}</button>
      {isExpanded && <p>{description}</p>}

    </div>
  );
}
export default DashboardCard;