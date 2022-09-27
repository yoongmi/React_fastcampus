import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import Links from "./components/Link";
import NavLinks from "./components/NavLinks";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const isLogin = true;

function App() {
  return (
    <BrowserRouter>
      <Links />
      <Routes>
        <Route
          path="/login"
          element={isLogin ? <Navigate replace to="/" /> : <Login />}
        ></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
