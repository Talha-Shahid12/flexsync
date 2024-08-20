import logo from "./logo.svg";
import "./App.css";
import { UniversityInformation } from "./Components/MyProfile/profileSection"; // Capitalize the import
import { PersonalInformation } from "./Components/MyProfile/profileSection";
import { ContactInformation } from "./Components/MyProfile/profileSection";
function App() {
  return (
    <div className="App">
      <UniversityInformation /> {/* Capitalized the component */}
      <div className="space-bottom" />
      <PersonalInformation />
      <div className="space-bottom" />
      <ContactInformation />
    </div>
  );
}

export default App;
