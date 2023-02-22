import './App.css';
import ProfileName from "./components/ProfileName";
import DefaultProfilePic from "./components/DefaultProfilePic";

function App() {
  return (
    <div className="App">
     <ProfileName name="This is Mr. Blobby"/>
     <DefaultProfilePic altText="Mr Blobby"/>
    </div>
  );
}

export default App;
