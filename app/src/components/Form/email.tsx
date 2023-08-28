import CssTextfield from "./textFieldCustom";
import  { FC, ChangeEvent, FocusEvent} from 'react';

type EmailForm = {
    label?:string;
    value:string;
    onChange: (event:ChangeEvent<HTMLInputElement>) => void;
    name:string;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

const EmailForms: FC<EmailForm> = ({label = 'Email', value, onChange, name}) => {

    return (

        <CssTextfield 
            name={name}
            label={label}
            value={value}

            onChange={onChange}
            id="outlined-adornment-password"

            autoComplete='off'
            sx={{ color : 'red' ,m: 1, width: '25ch'}}
        />
    );
}

export default EmailForms;