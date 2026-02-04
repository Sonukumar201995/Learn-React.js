import { useActionState } from "react";

function App() {

  const handleSubmit = (previousData, formData) => {
    let name = formData.get('name');
    let password = formData.get('password');

    console.log("handleSubmit called", name, password);

    return { name, password }; // new state return karna hota hai
  }

  const [data, action, pending] = useActionState(handleSubmit, null);

  return (
    <div>
      <h2>useActionState in React</h2>

      <form action={action}>
        <input type="text" placeholder="Enter Name" name="name" />
        <br /><br />
        <input type="text" placeholder="Enter Password" name="password" />
        <br /><br />
        <button disabled={pending}>Submit Data</button>
      </form>

      {data && (
        <h3>
          Name: {data.name} | Password: {data.password}
        </h3>
      )}
    </div>
  )
}

export default App;
