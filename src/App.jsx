import { useFormStatus } from "react-dom";

function App() {
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("submitted");
  };

  function CustomerForm() {
    const { pending } = useFormStatus();

    return (
      <>
        <input type="text" placeholder="Enter Name" />
        <br /><br />
        <input type="password" placeholder="Enter Password" />
        <br /><br />
        <button disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </>
    );
  }

  return (
    <div>
      <h2>useFormStatus React</h2>

      <form action={handleSubmit}>
        <CustomerForm />
      </form>
    </div>
  );
}

export default App;
