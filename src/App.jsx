import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import PersonalInformation from "./components/PersonalInformation";
import EducationInformation from "./components/Education";
import ExperienceInformation from "./components/Experience";
import "./App.css";

function App() {
  const [person, setPerson] = useState({
    firstName: "Can",
    lastName: "A.",
    email: "mockup@mockup.com",
    phone: "0123456789",
  });

  function handlePersonChange(field, value) {
    setPerson({
      ...person,
      [field]: value,
    });
  }

  function clearPersonInfo() {
    setPerson({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  }

  const [education, setEducation] = useState([
    {
      id: uuidv4(),
      schoolName: "Stanford University",
      studyTitle: "Bachelor of Science in Business Administration",
      studyStart: "09/2018",
      studyEnd: "06/2020",
    },
  ]);

  function handleEducationChange(id, field, value) {
    setEducation(
      education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
    );
  }

  function removeEducationInfo(id) {
    setEducation((prevEducation) =>
      prevEducation.filter((edu) => edu.id !== id)
    );
  }

  function clearFirstEducation() {
    setEducation((prevEducation) => [
      {
        ...prevEducation[0],
        schoolName: "",
        studyTitle: "",
        studyStart: "",
        studyEnd: "",
      },
      ...prevEducation.slice(1),
    ]);
  }

  function addNewEducationInfo() {
    setEducation([
      ...education,
      {
        id: uuidv4(),
        schoolName: "",
        studyTitle: "",
        studyStart: "",
        studyEnd: "",
      },
    ]);
  }

  const [experience, setExperience] = useState([
    {
      id: uuidv4(),
      companyName: "Porsche",
      positionTitle: "Chief Executive Officer",
      mainResponsibilites:
        "Corporate decisions, managing operations and resources and acting as the main point of communication between the board of directors and corporate operations",
      workStart: "12/03/2024",
      workEnd: "present",
    },
  ]);

  function handleExperienceChange(id, field, value) {
    setExperience(
      experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  }

  function removeExperiencInfo(id) {
    setExperience((prevExperience) =>
      prevExperience.filter((exp) => exp.id !== id)
    );
  }

  function clearFirstExperience() {
    setExperience((prevExperience) => [
      {
        ...prevExperience[0],
        companyName: "",
        positionTitle: "",
        mainResponsibilites: "",
        workStart: "",
        workEnd: "",
      },
    ]);
  }

  function addNewExperienceInfo() {
    setExperience([
      ...experience,
      {
        id: uuidv4(),
        companyName: "",
        positionTitle: "",
        mainResponsibilites: "",
        workStart: "",
        workEnd: "",
      },
    ]);
  }

  function exampleResume() {
    setPerson({
      firstName: "Can",
      lastName: "A.",
      email: "mockup@mockup.com",
      phone: "0123456789",
    });

    setEducation([
      {
        id: uuidv4(),
        schoolName: "Stanford University",
        studyTitle: "Bachelor of Science in Business Administration",
        studyStart: "09/2018",
        studyEnd: "06/2020",
      },
    ]);

    setExperience([
      {
        id: uuidv4(),
        companyName: "Porsche",
        positionTitle: "Chief Executive Officer",
        mainResponsibilites:
          "Corporate decisions, managing operations and resources and acting as the main point of communication between the board of directors and corporate operations",
        workStart: "12/03/2024",
        workEnd: "present",
      },
    ]);
  }

  return (
    <div className="container">
      <div className="input">
        <h1>Resume Builder</h1>
        <div className="cv-input">
          <button onClick={exampleResume}>Load Example Resume</button>
          <div className="personalInput">
            <PersonalInformation
              person={person}
              onPersonChange={handlePersonChange}
            />{" "}
            <button onClick={clearPersonInfo}>Clear</button>
          </div>
          <div className="educationInput">
            <EducationInformation
              education={education}
              onEducationChange={handleEducationChange}
              onRemoveEducation={removeEducationInfo}
              onClearFirstEducation={clearFirstEducation}
            />{" "}
            <button onClick={addNewEducationInfo}>add new Education</button>
          </div>
          <div className="experienceInput">
            <ExperienceInformation
              experience={experience}
              onExperienceChange={handleExperienceChange}
              onRemoveExperience={removeExperiencInfo}
              onClearFirstExperience={clearFirstExperience}
            />{" "}
            <button onClick={addNewExperienceInfo}>add new Experience</button>
          </div>
        </div>
      </div>
      <div className="output">
        <h1>Your Resume</h1>
        <div className="cv-output">
          <div className="personalOutput">
            <h3>Personal Info</h3>
            <p>
              {person.firstName} {person.lastName}
            </p>
            <p>{person.email}</p>
            <p>{person.phone}</p>
          </div>
          <div className="educationOutput">
            <h3>Education</h3>
            {education.map((edu) => (
              <div key={edu.id}>
                <h4>{edu.schoolName}</h4>
                <p>
                  {edu.studyStart}
                  {edu.studyStart && edu.studyEnd && " - "}
                  {edu.studyEnd}
                </p>
                <p>{edu.studyTitle}</p>
              </div>
            ))}
          </div>
          <div className="experienceOutput">
            <h3>Experience</h3>
            {experience.map((exp) => (
              <div key={exp.id}>
                <h4> {exp.companyName} </h4>
                <p>{exp.positionTitle}</p>
                <p>
                  {exp.workStart}
                  {exp.workStart && exp.workEnd && " - "}
                  {exp.workEnd}
                </p>
                <p>{exp.mainResponsibilites}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
