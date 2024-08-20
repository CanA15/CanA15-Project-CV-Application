import PersonalInformation from "./components/PersonalInformation";
import ExperienceInformation from "./components/Experience";
import EducationInformation from "./components/Education";

function App() {
  return (
    <div>
      <h1>Resume Builder</h1>
      <PersonalInformation />
      <ExperienceInformation />
      <EducationInformation />
    </div>
  );
}

export default App;
