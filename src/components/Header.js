import { Link } from "react-router-dom";

const Header = (props) => {
    return <nav className="nav">
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/projects" >Projects</Link>
    </nav>
};

export default Header;