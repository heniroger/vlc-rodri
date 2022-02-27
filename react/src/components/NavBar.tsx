import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";

const NavBar = () => {
  return (
    <Router>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        {/* Navbar Brand */}
        <a className="navbar-brand ps-3" href="index.html">
          Start Bootstrap
        </a>

        {/* Navbar */}
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw"></i>
            </span>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <Link to="/login" className="dropdown-item">
                  Login
                </Link>
              </li>

              <li>
                <Link to="/register" className="dropdown-item">
                  Register
                </Link>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a href="/" className="dropdown-item">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/login" element={Login} />

        <Route path="/register" element={Register} />
      </Routes>
    </Router>
  );
};

export default NavBar;
