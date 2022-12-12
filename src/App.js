import { ProtectRoute } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserAuthContextProvider from "./context/userAuthContext";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";

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
            <Route
              path="/"
              element={
                <Suspense fallback={<Loading />}>
                  <Welcome />
                </Suspense>
              }
            />

            <Route
              path="/home"
              element={
                <ProtectRoute>
                  <Suspense fallback={<Loading />}>
                    <Home />
                  </Suspense>
                </ProtectRoute>
              }
            />
            <Route
              path="/login"
              element={
                <Suspense fallback={<Loading />}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              path="/signup"
              element={
                <Suspense fallback={<Loading />}>
                  <Signup />
                </Suspense>
              }
            />
          </Routes>
        </UserAuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
