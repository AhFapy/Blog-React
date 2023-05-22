import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
        <h1>Blog-React</h1>
        <NavLink to="/signup">Sign up</NavLink>
        <NavLink to="/login">Log in</NavLink>
    </nav>
  )
}
