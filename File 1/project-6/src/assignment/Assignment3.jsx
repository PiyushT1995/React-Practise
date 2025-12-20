import { useState } from "react";
function Assignment3(){
  const [click,setClick]=useState(0);
  return(
    <div>
      <h2>Assignment 3</h2>
      <button onClick={()=>setClick(click+1)}>Click Me</button>
      <h3>Button Clicked:{click}</h3>

    </div>
  );
}
export default Assignment3;