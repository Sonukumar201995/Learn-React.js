function App() {

  const handleForm = (event) => {
    event.preventDefault();

    const user = document.querySelector('#user').value;
    const pass = document.querySelector('#password').value;

    console.log("Username:", user);
    console.log("Password:", pass);
  };

  return (
    <>
      <h2>Uncontrolled Components</h2>

      <form onSubmit={handleForm}>
        <input type="text" id="user" placeholder="Enter Name" />
        <br /><br />

        <input type="password" id="password" placeholder="Enter Password" />
        <br /><br />

        <button type="submit">Submit</button>
       

      </form>
    </>
  );
}

export default App;
