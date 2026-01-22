function App() {
  const students = [
    {
      name: "Sonu",
      subjects: ["Math", "Java", "React"],
    },
    {
      name: "Monu",
      subjects: ["C", "Python", "Node"],
    },
  ];

  return (
    <div>
      <h1>Nested Looping in React</h1>

      {students.map((student, index) => (
        <div key={index}>
          <h2>{student.name}</h2>

          <ul>
            {student.subjects.map((sub, i) => (
              <li key={i}>{sub}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
