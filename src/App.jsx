import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import ProtectedRoute from "./Components/ProtectedRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/main"
            element={<ProtectedRoute Component={<Home />} />}
          />
          <Route path="/" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
