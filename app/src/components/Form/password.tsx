import React from "react";
import CssTextfield from "./textFieldCustom";
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';


type PasswordFormProps = {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  }





const PasswordForm:React.FC<PasswordFormProps> = (props) => {


    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };

    return(



        <CssTextfield

        
            id="outlined-adornment-passwordregergeg"
            type={showPassword ? "text" : "password"}
            label={props.label}
            value={props.value}
            onChange={props.onChange}
            name={props.name}
            onBlur={props.handleBlur}
            sx={{m: 1, width: '25ch'}}

            InputProps={{                
                endAdornment: (
                    <InputAdornment position="end">

                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={(event)=>event.preventDefault()}
                            edge="end"
                            sx={{ color : 'white'}}
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>

                    </InputAdornment>
                ),
            }}        
        
        />


    );
    
}

export default PasswordForm;