import React from "react"

export default function Header(){
    return(
      <div className="box">
      <header className="header">
            <nav className="nav">
            <img src="react-logo2.png" className="logo"/>
              <ul className="list-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </header>
          </div>
    )
  }