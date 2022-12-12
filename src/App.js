import { ProtectRoute } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserAuthContextProvider from "./context/userAuthContext";
import { lazy } from "react";

const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Welcome = lazy(() => import("./pages/Welcome"));
const Signup = lazy(() => import("./pages/Signup"));

function App() {
  return (
    <div className="App">
      <Router>
        <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route
              path="/home"
              element={
                <ProtectRoute>
                  <Home />
                </ProtectRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </UserAuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
