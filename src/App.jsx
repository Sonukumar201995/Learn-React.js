import useToggle from "./useToggle";

function App() {
  const [value, toggleValue] = useToggle(true);

  return (
    <div>
      <button onClick={() => toggleValue()}>
        Toggle heading
      </button>

      <button onClick={() => toggleValue(true)}>
        Show heading
      </button>

      <button onClick={() => toggleValue(false)}>
        Hide heading
      </button>

      {value && <h1>custom hook</h1>}
    </div>
  );
}

export default App;
