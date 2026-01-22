function App() {
  const users = [
    {
      name: "sonu",
      email: "sonu@1234.com",
      age: 30,
    },
    {
      name: "monu",
      email: "monu@1234.com",
      age: 30,
    },
  ];

  return (
    <div>
      <h1>Loop in JSX with map function</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
