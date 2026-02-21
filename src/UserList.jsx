import { useEffect, useState } from "react";

export default function UserList() {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    setUserData(data);
  };

  const deleteUser = async (id) => {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Record deleted");
      getUserData(); // reload list
    }
  };

  return (
    <div>
      {
        userData.map((user) => (
          <div key={user.id}>
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>
            <h3>Email: {user.email}</h3>
            <hr />
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        ))
      }
    </div>
  );
}