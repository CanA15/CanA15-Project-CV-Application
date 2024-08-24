export default function ExperienceInformation({
  experience,
  onExperienceChange,
  onRemoveExperience,
  onClearFirstExperience,
}) {
  return (
    <div className="experienceInput">
      {experience.map((exp, index) => (
        <div key={exp.id}>
          <input
            type="text"
            name="companyName"
            value={exp.companyName}
            onChange={(e) =>
              onExperienceChange(exp.id, "companyName", e.target.value)
            }
            placeholder="Your Company"
          ></input>
          <input
            type="text"
            name="positionTitle"
            value={exp.positionTitle}
            onChange={(e) =>
              onExperienceChange(exp.id, "positionTitle", e.target.value)
            }
            placeholder="Your Position"
          ></input>
          <input
            type="text"
            name="mainResponsibilites"
            value={exp.mainResponsibilites}
            onChange={(e) =>
              onExperienceChange(exp.id, "mainResponsibilites", e.target.value)
            }
            placeholder="Job Responsibilites / Description"
          ></input>
          <input
            type="text"
            name="workStart"
            value={exp.workStart}
            onChange={(e) =>
              onExperienceChange(exp.id, "workStart", e.target.value)
            }
            placeholder="Position Start Date"
          ></input>
          <input
            type="text"
            name="workEnd"
            value={exp.workEnd}
            onChange={(e) =>
              onExperienceChange(exp.id, "workEnd", e.target.value)
            }
            placeholder="Position End Date"
          ></input>
          {index === 0 ? (
            <button onClick={onClearFirstExperience}>Clear</button>
          ) : (
            <button onClick={() => onRemoveExperience(exp.id)}>Remove</button>
          )}{" "}
        </div>
      ))}
    </div>
  );
}
