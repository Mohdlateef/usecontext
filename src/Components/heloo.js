import React from "react";
import { useContext } from "react";
import cricketcontext from "../context/cricketcontext";


const Hello=()=>{
    let {cricketer,setCricketer}=useContext(cricketcontext);
    
function increase(){

    setCricketer({...cricketer,age:cricketer.age+1})

}
    return(

        <div>
            <h3>hello my name is {cricketer.name}</h3>
            <p>i am {cricketer.age}  old</p>
            <p>i am {(cricketer.retired)?"yes":"No"}</p>
            <button onClick={increase}>Increase Age</button>
        </div>

        )
}
export default Hello;