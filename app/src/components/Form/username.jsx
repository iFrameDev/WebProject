import CssTextfield from "./textFieldCustom";
import React from "react";
import { useState } from "react"




export default function UsernameForm() {


    const regEx = /^.{8,20}$/;
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState(false);

    const handleChangeUsername = (event) =>{

        setUsername(event.target.value);
        
    };

    const HandleBlur = (event) => {

        return regEx.test(event.target.value) ? setUsernameError(false) : setUsernameError(true);
    }

    return (

        <CssTextfield 
        autoComplete='off'
        value={username}
        onBlur={HandleBlur}
        onChange={handleChangeUsername}
        label="Username"
        id="outlined-adornment-password"
        helperText={usernameError ? "Il vous faut un minimum de 8 caracteres" : ""}
        sx={{ color : 'red' ,m: 1, width: '25ch'}}
    />

    );
}
