import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import Links from "./components/Link";
import NavLinks from "./components/NavLinks";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import StateEx1 from "./components/StateEx1";
import StateEx2 from "./components/StateEx2";
import StateEx3 from "./components/StateEx3";
import StateEx4 from "./components/StateEx4";
import StateEx5 from "./components/StateEx5";
import A from "./components/Commu_Down";
import Up from "./components/Commu_Up";
import DataGet from "./components/DataGet";
import DataGet2 from "./components/DataGet2";
import DataGet3 from "./components/DataGet3";

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
      <StateEx1 />
      <StateEx2 />
      <StateEx3 />
      <StateEx4 />
      <StateEx5 />
      <A />
      <Up />
      <DataGet />
      <DataGet2 />
      <DataGet3 />
    </BrowserRouter>
  );
}

export default App;
