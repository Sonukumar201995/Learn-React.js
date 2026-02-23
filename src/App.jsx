import { useActionState } from "react";

export default function App() {

  const handleLogin = async (prevState, formData) => {
    const name = formData.get("name");
    const password = formData.get("password");

    if (!name || !password) {
      return { error: "All fields are required" };
    }

    if (password.length < 6) {
      return { error: "Password must be at least 6 characters" };
    }

    return { success: "Login successful" };
  };

  const [state, action, isPending] = useActionState(handleLogin, null);

  return (
    <div>
      <h1>Validation with useActionState in React</h1>

      <form action={action}>
        <input type="text" name="name" placeholder="Enter your name" />
        <br /><br />

        <input type="password" name="password" placeholder="Enter your password" />
        <br /><br />

        <button disabled={isPending}>
          {isPending ? "Logging in..." : "Login"}
        </button>
      </form>

      {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state?.success && <p style={{ color: "green" }}>{state.success}</p>}
    </div>
  );
}