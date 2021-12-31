import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
}

export default Navbar;
