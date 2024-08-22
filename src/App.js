import logo from "./logo.svg";
import "./App.css";
import { UniversityInformation } from "./Components/MyProfile/profileSection";
import { PersonalInformation } from "./Components/MyProfile/profileSection";
import { ContactInformation } from "./Components/MyProfile/profileSection";
import { Sidebar } from "./Components/SideBar/sidebar";
import { Navbar } from "./Components/SideBar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <div className="space-bottom" />
        <UniversityInformation />
        <div className="space-bottom" />
        <PersonalInformation />
        <div className="space-bottom" />
        <ContactInformation />
      </div>
    </div>
  );
}

export default App;
