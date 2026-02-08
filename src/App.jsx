import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Login from "./Login";
import NavBar from "./assets/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
