// import React from "react"
// import logo from "./react-logo2.png"

// export default  function Navbar(){
//     return(
//         <div className="container">
//           <div className="cont">
//           <img src={logo} className="logo"/>
//           <p>SillyFacts</p>
//           </div>
          
//           <div className="params">
          
//           <p>React Course- Project 1</p>
//           </div>
          
//         </div> 
//     )
// }


//Footer

import React from "react"
import logo1 from "../components/fb.png"
import logo2 from "../components/git.png"
import logo3 from "../components/ig.png"
import logo4 from "../components/twitter.png"


export default function Footer(){
    return(
        <div className="footer">
        <img src={logo1}  alt="facebook logo"/>
        <img src={logo2} alt="github logo"/>
        <img src={logo3} alt="instagram logo"/>
        <img src={logo4} alt="twitter logo"/>
            
            
           </div>
    )
}