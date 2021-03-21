import "./IndexNavbar.css";

const IndexNavbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-toggler">
          <i className="fas fa-bars"></i>
        </div>
        <div className="left-nav">
          <ul className="navbar-nav nav-collapsed">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Alumni
              </a>
            </li>
          </ul>
        </div>
        <div className="right-nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/accounts/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <button className="nav-link nav-button" onClick="donate_us()">
                Donate
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default IndexNavbar;
