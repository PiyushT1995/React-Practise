import Assignment1 from "./assignment/Assignment1";
import Assignment2 from "./assignment/Assignment2";
import ProfileCard from "./componets/ProfileCard";

function App(){
  return(
    <div>
      <ProfileCard
      name="Name1"
      role="Role1"
      city="City1"
      />
      <hr/>
      <ProfileCard
      name="Name2"
      role="Role2"
      city="City2"
      />
      <hr/>
      <ProfileCard
      name="Name3"
      role="Role3"
      city="City3"
      />
      <hr/>
      <Assignment1 name="Piyush"/>
      <Assignment2 age={32}/>

    </div>
  );
}
export default App
