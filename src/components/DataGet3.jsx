import { useContext } from "react";
import PersonContext from "../contexts/PersonContext";

export default function DataGet3() {
  const persons = useContext(PersonContext);
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
}
