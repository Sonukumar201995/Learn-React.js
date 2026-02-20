import { useState } from "react";

function UserAdd() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const createUser = async () => {

        const url = "http://localhost:3000/users";

        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, age, email })
        });

        response = await response.json();

        if (response) {
            alert("New user added");
        }
    };

    return (
        <div>
            <h2>Add User</h2>

            <input 
                type="text" 
                onChange={(event) => setName(event.target.value)} 
                placeholder="Enter Name"
            />
            <br />

            <input 
                type="number" 
                onChange={(event) => setAge(event.target.value)} 
                placeholder="Enter Age"
            />
            <br />

            <input 
                type="email" 
                onChange={(event) => setEmail(event.target.value)} 
                placeholder="Enter Email"
            />
            <br />

            <button onClick={createUser}>Add</button>
        </div>
    );
}

export default UserAdd;