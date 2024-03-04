import React,{useState} from "react";
import cricketcontext from "./cricketcontext";



const Cricketprovider=(props)=>{
    // now we want to use the values as well as update the values
    let [cricketer,setCricketer]=useState({
        name:"umer",
        age:25,
        retired:false,
        city:"srinagar",
    })

    return(
        <cricketcontext.Provider value={{
            cricketer:cricketer,
            setCricketer:setCricketer,
        }}>
          {props.children}
        </cricketcontext.Provider>
    )
}
export default Cricketprovider;