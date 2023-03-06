import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Navbar from "./components/Navbar";
import { Protected, ProtectedOne } from "./components/Protected";

// pages
import Home from "./home/Home";
import Login from "./login/Login";
import Signup from "./signup/Signup";

function App() {
  const { onAuthChange, user } = useAuthContext();
  return (
    <div className="App font-projectFont ">
      {onAuthChange && (
        <Router>
          <Navbar />
          <div className="max-w-5xl mx-auto pt-8">
            <Routes>
              <Route
                path="/"
                element={
                  <Protected isSignedIn={user}>
                    <Home />
                  </Protected>
                }
              />
              <Route
                path="/login"
                element={
                  <ProtectedOne isSignedIn={user}>
                    <Login />
                  </ProtectedOne>
                }
              />
              <Route
                path="/signup"
                element={
                  <ProtectedOne isSignedIn={user}>
                    <Signup />
                  </ProtectedOne>
                }
              />
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
