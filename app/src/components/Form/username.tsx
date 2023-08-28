import CssTextfield from "./textFieldCustom";
import { useState } from "react"


type usernamePropsType = {

    name:string;
    label:string;
    value:string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

}

const UsernameForm:React.FC<usernamePropsType> = (props) => {

    

    const [usernameError, setUsernameError] = useState<boolean>(false);

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (props.handleBlur) {
            return props.handleBlur(event);
        }
        
        // Perform your validation logic here
        if (value.length < 8) {
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }

        // Call the onBlur prop if it's provided
        
    };

    return (

        <CssTextfield
        
        name={props.name}
        label={props.label}
        value={props.value}
        onBlur={handleBlur}
        onChange={props.onChange}

        id="outlined-adornment-password"
        helperText={usernameError ? "Il vous faut un minimum de 8 caracteres" : ""}
        sx={{ color : 'red' ,m: 1, width: '25ch'}}         
        autoComplete='off'
    />

    );
}

export default UsernameForm;