import React  from "react"
import Header from "../../Header"
import Footer from "../../Footer"
import MainContent from "../../MainContent"
import "../../src/assets/App.css"

export default function Page(){
    return(
        <React.StrictMode>
            <Header/>
            <MainContent/>
            <Footer/>
        </React.StrictMode>
    )
}



 