import CssTextfield from "./textFieldCustom";
import { useState } from "react"




export default function UsernameForm(props) {

    const [usernameError, setUsernameError] = useState(false);

    return (

        <CssTextfield
        
        name={props.name}
        label={props.label}
        value={props.value}
        onBlur={props.handleBlur}
        onChange={props.onChange}

        id="outlined-adornment-password"
        helperText={usernameError ? "Il vous faut un minimum de 8 caracteres" : ""}
        sx={{ color : 'red' ,m: 1, width: '25ch'}}         
        autoComplete='off'
    />

    );
}
