import CssTextfield from "./textFieldCustom";
import React from "react";
import { useState } from "react"




export default function UsernameForm(props) {



    const regEx = /^.{8,20}$/;


    const [usernameError, setUsernameError] = useState(false);

    const HandleBlur = (event) => {

        if(props.useRegex)
        {
            return regEx.test(event.target.value) ? setUsernameError(false) : setUsernameError(true);
        }
        
    }

    return (

        <CssTextfield
        
        name={props.name}
        label={props.label}
        value={props.value}
        onBlur={HandleBlur}
        onChange={props.onChange}

        id="outlined-adornment-password"
        helperText={usernameError ? "Il vous faut un minimum de 8 caracteres" : ""}
        sx={{ color : 'red' ,m: 1, width: '25ch'}}         
        autoComplete='off'
    />

    );
}
