import React from "react";
import PersonContext from "../contexts/PersonContext";

export default class DataGet2 extends React.Component {
  static contextType = PersonContext;

  render() {
    const persons = this.context;
    return (
      <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    );
  }
}
