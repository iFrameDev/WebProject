import CssTextfield from "./textFieldCustom";
import React, { FC, ChangeEvent, FocusEvent, useState } from 'react';

type EmailForm = {
    label:string;
    value:string;
    onChange: (event:ChangeEvent<HTMLInputElement>) => void;
    name:string;
    onBlur: (event: FocusEvent<HTMLInputElement>) => void;
}

const EmailForms: FC<EmailForm> = ({label = 'Email', value, onChange, name}) => {


    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    const [emailError, setemailError] = useState(false);


    const HandleBlur = (event: FocusEvent<HTMLInputElement>) => {

        return emailRegex.test(event.target.value) ? setemailError(false) : setemailError(true);
    }

    return (

        <CssTextfield 
            name={name}
            label={label}
            value={value}
            onBlur={HandleBlur}
            onChange={onChange}
            id="outlined-adornment-password"
            helperText={emailError ? "Ce n'est pas une adresse email correct" : ""}
            autoComplete='off'
            sx={{ color : 'red' ,m: 1, width: '25ch'}}
        />
    );
}

export default EmailForms;