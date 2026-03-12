import {Link} from "react-router-dom"


function Navbar (){
  return (
    <div className="">
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/projects">projects</Link> | {" "}
        <Link to="/about">about</Link> | {" "}
        <Link to="/cv">CV</Link> | {" "}
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  )
}

export default Navbar;