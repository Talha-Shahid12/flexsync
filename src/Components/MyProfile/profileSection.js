import logo from "./logo.svg";
import person from "./person.svg";
import mobile from "./mobile.svg";

export function UniversityInformation() {
  return (
    <div className="container">
      <div className="uniInfo">
        <h2>
          <img src={logo} alt="University Logo" width="40" height="40" />
          <span className="h2">University Information</span>
        </h2>

        <div className="row">
          <h3 className="column">
            Roll Number: <span className="inline">21K-3355</span>
          </h3>

          <h3 className="column">
            Degree: <span className="inline">BC-CS</span>
          </h3>

          <h3 className="column">
            Batch: <span className="inline">2021</span>
          </h3>
        </div>
        <div className="row">
          <h3 className="column">
            Section: <span className="inline">BCS-213J</span>
          </h3>

          <h3 className="column">
            Campus: <span className="inline">Karachi</span>
          </h3>

          <h3 className="column">
            Status: <span className="inline">Current</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export function PersonalInformation() {
  return (
    <div className="container">
      <div className="uniInfo">
        <h2>
          <img src={person} alt="University Logo" width="40" height="40" />
          <span className="h2">Personal Information</span>
        </h2>
        <div className="row">
          <h3 className="column">
            Name: <span className="inline">Talha Shahid</span>
          </h3>

          <h3 className="column">
            DOB: <span className="inline">6/9/2003</span>
          </h3>

          <h3 className="column">
            Blood Group: <span className="inline">O</span>
          </h3>
        </div>
        <div className="row">
          <h3 className="column">
            Gender: <span className="inline">Male</span>
          </h3>
          <h3 className="column">
            CNIC: <span className="inline">44404-4910628-3</span>
          </h3>

          <h3 className="column">
            Nationality: <span className="inline">Pakistani</span>
          </h3>
        </div>
        <div className="row">
          <h3 className="column">
            Email: <span className="inline">talhashahid68035@gmail.com</span>
          </h3>

          <h3 className="column">
            Mobile No: <span className="inline">0303-0720728</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export function ContactInformation() {
  return (
    <div className="container">
      <div className="uniInfo">
        <h2>
          <img src={mobile} alt="University Logo" width="40" height="40" />
          <span className="h2">Personal Information</span>
        </h2>
        <div className="row">
          <h3 className="column">
            City: <span className="inline">Kunri</span>
          </h3>

          <h3 className="column">
            Country: <span className="inline">Pakistan</span>
          </h3>

          <h3 className="column">
            Home Phone: <span className="inline">031234567891</span>
          </h3>
        </div>

        <div className="row">
          <h3 className="column">
            Permanent Address:
            <span className="inline">
              Meharban Seed Store Ghala Mandi Kunri Sindh Tehsil Kunri District
              Umerkot
            </span>
          </h3>
        </div>
        <div className="row">
          <h3 className="column">
            Current Address:
            <span className="inline">
              Meharban Seed Store Ghala Mandi Kunri Sindh Tehsil Kunri District
              Umerkot
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}
