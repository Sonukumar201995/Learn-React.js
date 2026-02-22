import { useState } from "react"

export default function App() {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [nameErr, setNameErr] = useState('')
  const [passErr, setPassErr] = useState('')

  const handleName = (event) => {
    const value = event.target.value
    setName(value)

    if (value.length > 5) {
      setNameErr('Only 5 characters allowed')
    } else {
      setNameErr('')
    }
  }

  const handlePassword = (event) => {
    const value = event.target.value
    setPassword(value)

    const passwordRegex = /^(?=.*\d).{6,}$/

    if (!passwordRegex.test(value)) {
      setPassErr('Password must be 6+ characters and contain at least 1 number')
    } else {
      setPassErr('')
    }
  }

  return (
    <div>
      <h2>Simple Validation in React</h2>

      <input
        type="text"
        value={name}
        onChange={handleName}
        placeholder="Enter your name"
      />
      <br />
      <span style={{ color: "red" }}>{nameErr}</span>

      <br /><br />

      <input
        type="password"
        value={password}
        onChange={handlePassword}
        placeholder="Enter your password"
      />
      <br />
      <span style={{ color: "red" }}>{passErr}</span>

      <br /><br />

      <button disabled={nameErr || passErr}>
        Login
      </button>
    </div>
  )
}