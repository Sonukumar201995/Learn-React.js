import { useEffect, useState } from "react";

export default function App() {


  const [userData,setUserData]=useState([]);
  useEffect(() => {
    getUserData();
  }, []);  

  const getUserData = async () => {
    const url = "http://localhost:3000/users";

    let response = await fetch(url);
    response=await response.json();  

    console.log(response);
    setUserData(response);
  };

  return (
    <div>
      <h1>Integrate Json Server API and Loader</h1>
      {
      userData.map((user) => {
        return <h1 key={user.id}>{user.name}</h1>;
      })
    }
    </div>
  );
}
