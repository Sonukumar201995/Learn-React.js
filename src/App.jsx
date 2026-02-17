import { useEffect, useState } from "react";

export default function App() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUsersData();
  }, []);

  async function getUsersData() {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    let data = await response.json();
    setUsersData(data.users);
  }

  return (
    <div>
      <h1>Fetch data from API</h1>

      {usersData.map((user) => (
        <h1 key={user.id}>{user.firstName}</h1>
      ))}
    </div>
  );
}
