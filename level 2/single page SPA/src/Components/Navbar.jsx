import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="text-slate-200 text-xl p-4 w-[90%] 
    flex items-center justify-center bg-slate-800 gap-4 ">
      <Link to="/">Home</Link>
      <Link to="/features">Features</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;