import React from "react";
import { useContext } from "react";
import cricketcontext from "../context/cricketcontext";
let Hii=()=>{
let {cricketer,setCricketer}=useContext(cricketcontext)
    return(
        <div>
            hii my name is {cricketer.name} i am a crickter;
            <p>my age is{cricketer.age}</p>
        </div>
    )
}
export default Hii;