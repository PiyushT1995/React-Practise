import { useState } from "react";
function Assignment3(){
  const[isLoggedIn,setIsLoggedIn]=useState(false);

  return(
    <div>
      <h2>Assignment 3</h2>

      <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn?"Logout":"Login"}</button>

      <p>
        {isLoggedIn?"Welcome User!":"Please login user"}
      </p>

    </div>
  );
}
export default Assignment3;