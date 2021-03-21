import './IndexHeader.css'
import logo from 'static/logo.png'

const IndexHeader = () => {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <h1>
            <span
              onClick="document.querySelector('.navbar a:first-child').click()"
              style={{cursor: "pointer"}}
            >
              Jagrati
            </span>
          </h1>
          <div className="branding1">
            <p>an initiative of IIITians</p>
          </div>
        </div>
        <a
          href={logo}
          target="_blank"
          rel="noreferrer"
          style={{float: "right"}}
        >
          <img src={logo} class="logo" alt='logo' />
        </a>
      </div>
    </header>
  );
};

export default IndexHeader;
