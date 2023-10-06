import logo from "../images/logo.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  return (
    <>
      {" "}
      <nav class="navbar navbar-expand-lg bg-transperant border-bottom ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img className="navLogo" src={logo} alt="Logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-flex justify-content-end "
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-light" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light " href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  Who We are
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  What We Do?
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  Solution
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
