import React  from "react";
import Link from 'next/link'


function Header() {


    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link href='/'><a className="navbar-brand">Blog & Home</a></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
         <Link href='signUp'><a className="nav-link" >Sign Up <span className="sr-only">(current)</span></a></Link>
          </li>
          <li className="nav-item">
            <Link href='login'><a className="nav-link" >Login</a></Link>
          </li>
          <li className="nav-item">
            <Link href='fuck'><a className="nav-link" >Fuck</a></Link>
          </li>
        </ul>
      </div>
    </nav>
      )
}

export default Header
