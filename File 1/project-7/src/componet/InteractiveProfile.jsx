import { useState } from "react";
function InteractiveProfile({name,role,city}){
  const[isVisible,setIsVisible]=useState(false);
  return(
    <div>
      <button onClick={()=>setIsVisible(!isVisible)}>{isVisible?"Show Profile":"Hide Profile"}</button>
  
     {isVisible && (
     <div>
      <h3>My Name is {name}</h3>
      <p>I work as {role}</p>
      <p>I live in {city}</p>
      </div>
     )}


    </div>
  );
}
export default InteractiveProfile;