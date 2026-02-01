import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');

  const handleUser = () => {
    if (user.trim() === '') return; // avoid empty input
    setUsers([...users, user]);
    setUser(''); // clear input after add
  };

  console.log(users);

  return (
    <div>
      <p>Derived Hooks</p>
      <input
        type="text"
        value={user}
        onChange={(event) => setUser(event.target.value)}
        placeholder="Add New User"
      />
      <button onClick={handleUser}>Add User</button>

      <ul>
        {users.map((u, index) => (
          <li key={index}>{u}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
