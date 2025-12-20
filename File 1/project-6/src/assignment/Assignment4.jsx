import { useState } from "react";
function Assignment4(){
  const[name]=useState("Piyush");
  return(
    <div>
    <h2>Assignment 4</h2>
    <h3>My Name is {name}</h3>

    </div>
  );
}
export default Assignment4;