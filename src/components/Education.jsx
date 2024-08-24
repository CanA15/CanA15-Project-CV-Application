export default function EducationInformation({
  education,
  onEducationChange,
  onRemoveEducation,
  onClearFirstEducation,
}) {
  return (
    <div>
      {education.map((edu, index) => (
        <div key={edu.id}>
          <input
            type="text"
            name="schoolName"
            value={edu.schoolName}
            onChange={(e) =>
              onEducationChange(edu.id, "schoolName", e.target.value)
            }
            placeholder="School Name"
          />
          <input
            type="text"
            name="studyTitle"
            value={edu.studyTitle}
            onChange={(e) =>
              onEducationChange(edu.id, "studyTitle", e.target.value)
            }
            placeholder="Study Title"
          />
          <input
            type="text"
            name="studyStart"
            value={edu.studyStart}
            onChange={(e) =>
              onEducationChange(edu.id, "studyStart", e.target.value)
            }
            placeholder="Study Start Date"
          />
          <input
            type="text"
            name="studyEnd"
            value={edu.studyEnd}
            onChange={(e) =>
              onEducationChange(edu.id, "studyEnd", e.target.value)
            }
            placeholder="Study End Date"
          />
          {index === 0 ? (
            <button onClick={onClearFirstEducation}>Clear</button>
          ) : (
            <button onClick={() => onRemoveEducation(edu.id)}>Remove</button>
          )}{" "}
        </div>
      ))}
    </div>
  );
}
