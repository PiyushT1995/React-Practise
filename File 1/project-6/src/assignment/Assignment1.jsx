import { useState } from "react";
function Assignment1(){
  const [count,setCount]=useState(0);

  return(
    <div>
      <h2>Assignment 1</h2>
      <h3>Count:{count}</h3>

      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>

    </div>

  );
}
export default Assignment1;