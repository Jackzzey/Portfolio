import {Link} from "react-router-dom"


function Navbar (){
  return (
    <div className="">
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/">About</Link> | {" "}
        <Link to="/">Contact</Link>
      </nav>
    </div>
  )
}

export default Navbar;