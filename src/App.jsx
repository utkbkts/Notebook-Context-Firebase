import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useAuthContext } from "./hooks/Useauthcontext";
function App() {
  const {authIsReady,user}=useAuthContext()
  return (
    <div className="App">
     {authIsReady && <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={user ? <Home />: <Navigate to="/login"/>} />
            <Route path="/login" element={!user ? <Login />:<Navigate to="/"/>} />
            <Route path="/register" element={!user ? <Register />:<Navigate to="/"/>} />
          </Routes>
        </div>
      </BrowserRouter>}
    </div>
  );
}

export default App;
