import NavBrand from "/images/logotype_distressed_light.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="nav-left">
            <img className="nav-brand" src={NavBrand} />
          </div>
          <div className="nav-right">
            <a className="btn-primary">Menu</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
