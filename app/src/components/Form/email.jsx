import CssTextfield from "./textFieldCustom";
import React from "react";
import { useState } from "react"




export default function EmailForms({label = 'Email', value, onChange, name, onBlur}) {


    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    const [emailError, setemailError] = useState(false);


    const HandleBlur = (event) => {

        return emailRegex.test(event.target.value) ? setemailError(false) : setemailError(true);
    }

    return (

        <CssTextfield 
            name={name}
            label={label}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            id="outlined-adornment-password"
            helperText={emailError ? "Ce n'est pas une adresse email correct" : ""}
            autoComplete='off'
            sx={{ color : 'red' ,m: 1, width: '25ch'}}
        />
    );
}
