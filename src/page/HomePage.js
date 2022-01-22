import React from "react";
import Background from "../Components/Background/Background";
import WeProvide from "../Components/WeProvide/WeProvide";
import Featured from "../Components/Featured/Featured";


export default function HomePage(){
    return(
        <div>
            <Background/>
            <WeProvide/>
            <Featured/>
        </div>
    )
}