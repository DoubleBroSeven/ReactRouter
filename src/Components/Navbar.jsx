import { Link } from "react-router-dom"

const NavBar = () => {

  return <div id="navbar">
    <Link to="/">Home</Link>
    <Link to="/blue">Blue</Link>
    <Link to="/red">Red</Link>
    <Link to="/purple">Purple</Link>
    <Link to="/boring">Boring</Link>
  </div>
}

export default NavBar