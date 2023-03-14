import { Route, Routes} from "react-router-dom";
import Dashboard from "./Routes/Dashboard";
import Login from "./Routes/Login";
import SignUp from "./Routes/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element = { <Login /> } />
      <Route path="/signup" element = { <SignUp /> } />
      <Route path="/dashboard" element = {<Dashboard />} />
    </Routes>
  );
}

export default App;
