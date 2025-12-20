import { useState } from "react";
function Assignment2(){
  const[isVisible,setVisible]=useState(false)
  return(
    <div>
      <h2>Assignment 2</h2>
      <button onClick={()=>setVisible(!isVisible)}>
        {isVisible?"Hide":"Show"}
      </button>

      {isVisible &&<p>Text is visible</p>}

    </div>
  );
}
export default Assignment2;