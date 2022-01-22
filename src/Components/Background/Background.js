import React from "react";
import "./Background.css"

export default function Background(){
    return(
        <div className="BackgroundImg" 
        style={{
            background:`url('../assets/img10new.png')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",

        }}
        >

        </div>
    )
}