import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink to="/">home</NavLink>
      </li>
      <li>
        <NavLink to="/Profile">profile</NavLink>
      </li>
      <li>
        <NavLink to="/Profile/1234">profile/1</NavLink>
      </li>
      <li>
        <NavLink to="/About">about</NavLink>
      </li>
      <li>
        <NavLink to="/About?name=lily">about?name=lily</NavLink>
      </li>
    </ul>
  );
}
