import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Home from "./pages/Home.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./context/authContext.jsx";
function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex justify-center items-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
    </div>
  );
}

export default App;
