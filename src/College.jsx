import { NavLink, Outlet } from "react-router";

export default function College() {
  return (
    <>
      <h2>College</h2>

      <NavLink to="students">Student</NavLink> |{" "}
      <NavLink to="department">Department</NavLink> |{" "}
      <NavLink to="details">Student Details</NavLink>

      <hr />
      <Outlet />
    </>
  );
}
