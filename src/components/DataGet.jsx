import PersonContext from "../contexts/PersonContext";

export default function DataGet() {
  return (
    <PersonContext.Consumer>
      {(persons) => (
        <ul>
          {persons.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      )}
    </PersonContext.Consumer>
  );
}
