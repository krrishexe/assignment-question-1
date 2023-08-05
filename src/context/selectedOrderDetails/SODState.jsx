import React, { useState } from "react";
import SODContext from "./SODContext";

const SODState =(props)=>{

    const [selectedOrderDetails,setSelectedOrderDetails] =useState({})

    return (
        <SODContext.Provider value={{selectedOrderDetails,setSelectedOrderDetails}}>
            {props.children}
        </SODContext.Provider>
    )
}

export default SODState