import { useState } from "react";
function Assignment2(){
  const[isOn,setIsOn]=useState(false)
  return(
    <div>
      <h2>Assignment 2</h2>
      <button onClick={()=>setIsOn(!isOn)}>{isOn?"ON":"OFF"}</button>

      {isOn && <p>The Switch is on</p>}

    </div>
  );
}
export default Assignment2;