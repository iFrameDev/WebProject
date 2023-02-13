import CssTextfield from "./textFieldCustom";
import React from "react";
import { useState } from "react"




export default function UsernameForm(props) {



    const regEx = /^.{8,20}$/;

    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState(false);

    const handleChangeUsername = (event) =>{

        setUsername(event.target.value);
        props.usernameValue(event.target.value)
        
    };

    const HandleBlur = (event) => {

        if(props.useRegex)
        {
            return regEx.test(event.target.value) ? setUsernameError(false) : setUsernameError(true);
        }
        
    }

    return (

        <CssTextfield
  
        autoComplete='off'
        label={props.label}
        value={username}
        onBlur={HandleBlur}
        onChange={handleChangeUsername}
        id="outlined-adornment-password"
        helperText={usernameError ? "Il vous faut un minimum de 8 caracteres" : ""}
        sx={{ color : 'red' ,m: 1, width: '25ch'}}
    />

    );
}
