import React from "react"
import astrie from "./astrie.jpg"


export default function Info(){
    return(
        <div className="all">
            <div>
            <img src={astrie} alt="image of Astrie talking too much" className="astrie"/>
           
        <center><h1 className="name">UWUMVIYIMANA Astrie</h1></center>
        <center>
        <h3 className="backend">Full Stack Developer</h3>
        </center>
        <button className="email">
                Email
            </button>
            <button className="linkedin">
                LinkedIn
            </button>
        </div>
        
        <div className="about">
        <h1>About</h1>
        <br></br>
        <p>Astrie is an experienced full stack web devloper.
            <br></br>
            She has studied at Rwanda Coding Academy.She has
            
            a dream of becoming a famous ethical hacker.
        </p>
    </div>
    <div className="interests">
        <h1>Interests</h1>
        <br></br>
        <p>Astrie likes singing and sports.
        
        She also loves staring at the sky.
        
        It is her favorite thing to do.
        <br></br>
        She also loves reading so much.</p>
    </div>
    
        </div>
        
        
    )
}