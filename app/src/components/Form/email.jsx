import CssTextfield from "./textFieldCustom";
import React from "react";
import { useState } from "react"




export default function EmailForm(props) {


    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const [email, setEmail] = useState("");
    const [emailError, setemailError] = useState(false);

    const handleChangeEmail = (event) =>{

        setEmail(event.target.value);
        
    };

    const HandleBlur = (event) => {

        return emailRegex.test(event.target.value) ? setemailError(false) : setemailError(true);
    }

    return (

        <CssTextfield 
        autoComplete='off'
        label={props.label}
        value={email}
        onBlur={HandleBlur}
        onChange={handleChangeEmail}
        id="outlined-adornment-password"
        helperText={emailError ? "Ce n'est pas une adresse email correct" : ""}
        sx={{ color : 'red' ,m: 1, width: '25ch'}}
    />

    );
}
