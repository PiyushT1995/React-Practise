import InteractiveProfile from "./componet/InteractiveProfile";

function App(){
  return(
    <div>
      <InteractiveProfile
      name ="Piyush"
      role = "SDE 2"
      city = "Bhopal"
      />

      <InteractiveProfile
      name="Sangita"
      role="Dockter"
      city="Jhamshedpur"/>
    </div>
  );
}
export default App
