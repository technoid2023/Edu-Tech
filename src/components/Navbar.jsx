import { Link } from "react-router-dom";


function Navbar(){
    return(
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Contact Us</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar;
