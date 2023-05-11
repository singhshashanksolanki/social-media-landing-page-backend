import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import {
  BrowserRouter as Router, Routes, Route, Navigate
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.js";

function App() {

  const {user} = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route  path="/" element={user? <Home />: <Register />}>
        </Route>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}>
        </Route>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}>
        </Route>
        <Route path="/profile/:username" element={<Profile />}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
