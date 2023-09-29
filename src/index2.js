// import React from "react"
// import Main from "./components/main"
// import Navbar from "./components/navbar"

// export default function Page(){
//   return(
//     <React.StrictMode>
//     <Navbar />
//     <Main />
//   </React.StrictMode>
//   )
   
// }

import React from "react"
import Info from "./components/info"
import Footer from "./components/navbar"


export default function Main(){
  return(
    <React.StrictMode>
        <Info />
        <Footer />
    </React.StrictMode>
  )
}