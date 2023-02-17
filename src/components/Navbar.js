import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="bg-dark">
      <div class="container-fluid">
      <Link to='/'>
        <button className="btn">David Yu</button>
        </Link>
          <div className="btn-target d-flex justify-content-end">
            <button className="btn_top ms-5">
              <span className="button_top">
                <Link to="/Portfolio">Portfolio</Link>
              </span>
            </button>
            <button className="btn_top ms-5">
              <span className="button_top">
                <Link to="/Resume">Resume</Link>
              </span>
            </button>
            <button className="btn_top ms-5">
              <span className="button_top">
                <Link to="/Project">Project</Link>
              </span>
            </button>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
