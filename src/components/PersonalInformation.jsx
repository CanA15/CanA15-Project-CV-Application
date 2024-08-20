import { useState } from "react";

export default function PersonalInformation() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }
  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  return (
    <>
      <h2>Personal Information</h2>
      <label>
        First Name: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last Name: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email: <input value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Phone Number:{" "}
        <input value={phoneNumber} onChange={handlePhoneNumberChange} />
      </label>
      <label>
        Location <input value={location} onChange={handleLocationChange} />
      </label>

      <div>
        <p>
          {firstName + " "} {lastName}
        </p>
        <p>{email}</p>
        <p>{phoneNumber}</p>
        <p>{location}</p>
      </div>
    </>
  );
}
