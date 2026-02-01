import { useState } from "react";
import Login from "./components/Login";
import Signup from "./pages/Signup";

function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      {page === "login" && <Login goSignup={() => setPage("signup")} />}
      {page === "signup" && <Signup goLogin={() => setPage("login")} />}
    </>
  );
}

export default App;
