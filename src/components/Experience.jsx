import { useState } from "react";

export default function ExperienceInformation() {
  const [experience, setExperience] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [positionDescription, setPositionDescription] = useState("");
  const [positionStartDate, setPositionStartDate] = useState("");
  const [positionEndDate, setPositionEndDate] = useState("");
  const [positionLocation, setPositionLocation] = useState("");

  function handleCompanyNameChange(e) {
    setCompanyName(e.target.value);
  }

  function handlePositionTitleChange(e) {
    setPositionTitle(e.target.value);
  }

  function handlePositionDescriptionChange(e) {
    setPositionDescription(e.target.value);
  }

  function handlePositionStartDateChange(e) {
    setPositionStartDate(e.target.value);
  }
  function handlePositionEndDateChange(e) {
    setPositionEndDate(e.target.value);
  }
  function handlePositionLocationChange(e) {
    setPositionLocation(e.target.value);
  }
  function handleAddExperience() {
    setExperience([
      ...experience,
      {
        companyName,
        positionTitle,
        positionDescription,
        positionStartDate,
        positionEndDate,
        positionLocation,
      },
    ]);
    setCompanyName("");
    setPositionTitle("");
    setPositionDescription("");
    setPositionStartDate("");
    setPositionEndDate("");
    setPositionLocation("");
  }
  function handleRemoveExperience(index) {
    setExperience(experience.filter((_, i) => i !== index));
  }

  return (
    <>
      <h2>Experience</h2>
      <label>
        Company:{" "}
        <input value={companyName} onChange={handleCompanyNameChange} />
      </label>
      <label>
        Position:{" "}
        <input value={positionTitle} onChange={handlePositionTitleChange} />
      </label>
      <label>
        Description:{" "}
        <input
          value={positionDescription}
          onChange={handlePositionDescriptionChange}
        />
      </label>
      <label>
        Start Date:{" "}
        <input
          value={positionStartDate}
          onChange={handlePositionStartDateChange}
        />
      </label>
      <label>
        End Date:{" "}
        <input value={positionEndDate} onChange={handlePositionEndDateChange} />
      </label>
      <label>
        Location{" "}
        <input
          value={positionLocation}
          onChange={handlePositionLocationChange}
        />
      </label>
      <button type="submit" onClick={handleAddExperience}>
        Add Education
      </button>

      <div>
        {experience.map((edu, index) => (
          <div key={index}>
            <p>{edu.positionTitle + " "}</p>{" "}
            <p>{edu.positionDescription + " "}</p>
            <p>
              {edu.positionStartDate} - {edu.positionEndDate}
            </p>
            <p>{edu.positionLocation}</p>
            <p>
              <button onClick={() => handleRemoveExperience(index)}>
                Remove
              </button>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
