import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="contianer">
        <div className="nav-wrappwer">
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link className="nav-link" to={"/home"}>
                  Behavior
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/home"}>
                  Appearance
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/home"}>
                  Custom Fields
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/home"}>
                  Questions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/home"}>
                  URL Control
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
