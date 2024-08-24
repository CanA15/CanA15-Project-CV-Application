export default function PersonalInformation({ person, onPersonChange }) {
  return (
    <div className="personalInput">
      <input
        type="text"
        name="firstName"
        value={person.firstName}
        onChange={(e) => onPersonChange("firstName", e.target.value)}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={person.lastName}
        onChange={(e) => onPersonChange("lastName", e.target.value)}
        placeholder="Last Name"
      />
      <input
        type="email"
        name="e-mail"
        value={person.email}
        onChange={(e) => onPersonChange("email", e.target.value)}
        placeholder="Email"
      />
      <input
        type="tel"
        name="phonenumber"
        value={person.phone}
        onChange={(e) => onPersonChange("phone", e.target.value)}
        placeholder="Phone"
      />
    </div>
  );
}
