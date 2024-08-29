import { Link,useNavigate } from "react-router-dom";
import '../styles/NavBar.css';

const NavBar = () => {
    const navigate = useNavigate();
  return (
    <nav className="navbar-container">

      <Link to="/" className="nav-link">
        <img 
          src="https://mir-s3-cdn-cf.behance.net/user/276/5760539115195.596f96c5099fc.jpg" 
          alt="Logo" 
          style={{width:'20px', height:'20px', borderRadius:'5px'}} 
        />
        <p>Abstract | Help Center</p>
      </Link>

      <button className="submit-request-btn" onClick={()=>navigate('/help-form')}>
        Submit a request
      </button>
    
    </nav>
  );
}

export default NavBar;
