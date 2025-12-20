import { useState } from "react";
function Assignment4(){
  const[count,setCount]=useState(0);
  return(
    <div>
     <h3>Assignment 4</h3>

     <button onClick={()=>setCount(count+1)}>Increase</button>
     <p>Count:{count}</p>

     {count >5 && <p>Count is greater then 5</p>}


    </div>
  );
}
export default Assignment4;