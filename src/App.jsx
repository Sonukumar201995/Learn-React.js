import { Routes, Route, Link } from "react-router-dom";
import UserAdd from "./UserAdd";
import UserList from "./UserList";

export default function App() {
  return (
    <div>
      <h1>Make Routes and pages for Add user and user List UI</h1>

      {/* Navigation */}
      <nav>
        <Link to="/add">Add User</Link> |{" "}
        <Link to="/list">User List</Link>
      </nav>

      <Routes>
        <Route path="/add" element={<UserAdd />} />
        <Route path="/list" element={<UserList />} />
      </Routes>
    </div>
  );
}