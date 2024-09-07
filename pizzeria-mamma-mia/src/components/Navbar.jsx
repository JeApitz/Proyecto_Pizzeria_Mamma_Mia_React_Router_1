import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { formatoNumero } from "../utils/formatoNumero";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    // <div className="navbar">
    //   <div style={{display:'flex', gap:'10px'}}>
    //   <h2>Pizzería Mamma Mia!</h2>
    //   <div className="navbar-button">
    //     <Button variant="dark">🍕Home</Button>
    //     {token ? (
    //       <>
    //         <Button variant="dark">🔓Profile</Button>
    //         <Button variant="dark">🔒Logout</Button>
    //       </>
    //     ) : (
    //       <>
    //         <Button variant="dark">🔐Login</Button>
    //         <Button variant="dark">🔐Register</Button>
    //       </>
    //     )}
    //   </div>
    //   </div>
    //   <Button variant="success">🛒Total: ${formatoNumero(total)}</Button>
    // </div>

    <div className="navbar">
      <div style={{ display: "flex", gap: "10px" }}>
        <h2>Pizzería Mamma Mia!</h2>
        <div className="navbar-button">
          <Link to='/'><Button variant="dark">🍕Home</Button></Link>
          {/* <Button variant="dark">🍕Home</Button> */}
          <Link to='/profile'><Button variant="dark">🔓Profile</Button></Link>
          {/* <Button variant="dark">🔓Profile</Button> */}
          {/* <Link to='/logout'><Button variant="dark">🔒Logout</Button></Link> */}
          {/* <Button variant="dark">🔒Logout</Button> */}
          <Link to='/login'><Button variant="dark">🔐Login</Button></Link>
          {/* <Button variant="dark">🔐Login</Button> */}
          <Link to='/register'><Button variant="dark">🔐Register</Button></Link>
          {/* <Button variant="dark">🔐Register</Button> */}
          {/* <Link to='/pizza/p001'><Button variant="dark">🍕Pizza</Button></Link> */}
        </div>
      </div>
      <Link to='/cart'><Button variant="success">🛒Total: ${formatoNumero(total)}</Button></Link>
      {/* <Button variant="success">🛒Total: ${formatoNumero(total)}</Button> */}
    </div>
  );
};

export default Navbar;
