function Assignment1(){
  const handleClick = () => {
    alert("Hello React");
  };
  return(
    <div>
      <h2>Assignment 1</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
export default Assignment1;