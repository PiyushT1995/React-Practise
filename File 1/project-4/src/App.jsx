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

    </div>
  );
}
export default App
