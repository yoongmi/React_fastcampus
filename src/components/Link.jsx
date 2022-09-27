import { Link } from "react-router-dom";

export default function Links() {
  return (
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/Profile">profile</Link>
      </li>
      <li>
        <Link to="/Profile/1234">profile/1</Link>
      </li>
      <li>
        <Link to="/About">about</Link>
      </li>
      <li>
        <Link to="/About?name=lily">about?name=lily</Link>
      </li>
    </ul>
  );
}
