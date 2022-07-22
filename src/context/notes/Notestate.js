import React from "react";
import Notecontext from "./Notecontext";
import { useState } from "react";

const Notestate = (props)=>{
    const s1 = {
        "name":"jigar",
        "age":"23"
    }
    const [state, setState] = useState(s1)
    const update = ()=>{
        setTimeout(() => {
            setState({"name":"prakash","age":"24"})
        }, 2000);
    }
    return (
        <Notecontext.Provider value={{state,update}}>
            {props.children}
        </Notecontext.Provider>
    )
}
export default Notestate; 