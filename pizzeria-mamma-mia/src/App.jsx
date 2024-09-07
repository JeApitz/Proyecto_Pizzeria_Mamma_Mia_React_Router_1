import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Pizza from "./pages/Pizza";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/pizza/p001" element={<Pizza />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* <Home /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
      {/* <Pizza /> */}
      <Footer />
    </>
  );
}

export default App;
