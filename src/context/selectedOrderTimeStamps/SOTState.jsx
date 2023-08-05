import React, { useState } from "react";
import SOTcontext from "./SOTContext"

const SOTState =(props)=>{

    const [selectedOrderTimeStamps,setSelectedOrderTimeStamps] =useState({})

    return(
        <SOTcontext.Provider value={{selectedOrderTimeStamps,setSelectedOrderTimeStamps}}>
            {props.children}
        </SOTcontext.Provider>
    )
}

export default SOTState