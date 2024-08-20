import { useState } from "react";

export default function EducationInformation() {
  const [education, setEducation] = useState([]);
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyDateStart, setStudyDateStart] = useState("");
  const [studyDateEnd, setStudyDateEnd] = useState("");

  function handleSchoolNameChange(e) {
    setSchoolName(e.target.value);
  }

  function handleStudyTitleChange(e) {
    setStudyTitle(e.target.value);
  }

  function handleStudyDateStartChange(e) {
    setStudyDateStart(e.target.value);
  }
  function handleStudyDateEndChange(e) {
    setStudyDateEnd(e.target.value);
  }
  function handleAddEducation() {
    setEducation([
      ...education,
      { schoolName, studyTitle, studyDateStart, studyDateEnd },
    ]);
    setSchoolName("");
    setStudyTitle("");
    setStudyDateStart("");
    setStudyDateEnd("");
  }
  function handleRemoveEducation(index) {
    setEducation(education.filter((_, i) => i !== index));
  }

  return (
    <>
      <h2>Education</h2>
      <label>
        School Name:{" "}
        <input value={schoolName} onChange={handleSchoolNameChange} />
      </label>
      <label>
        Field of Study:{" "}
        <input value={studyTitle} onChange={handleStudyTitleChange} />
      </label>
      <label>
        Start Date:{" "}
        <input value={studyDateStart} onChange={handleStudyDateStartChange} />
      </label>
      <label>
        End Date:{" "}
        <input value={studyDateEnd} onChange={handleStudyDateEndChange} />
      </label>
      <button type="submit" onClick={handleAddEducation}>
        Add Education
      </button>

      <div>
        {education.map((edu, index) => (
          <div key={index}>
            <p>{edu.schoolName + " "}</p>
            <p>{edu.studyTitle + " "}</p>
            <p>
              {edu.studyDateStart} - {edu.studyDateEnd}
            </p>
            <p>
              <button onClick={() => handleRemoveEducation(index)}>
                Remove
              </button>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
