import { useEffect, useState } from "react";

export default function UserLsit() {


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
          {
        userData.map((user) => (
          <div key={user.id}>
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>
            <h3>Email: {user.email}</h3>
            <hr />
          </div>
        ))
      }
    </div>
  );
}
