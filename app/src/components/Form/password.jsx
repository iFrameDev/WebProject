import React from "react";
import CssTextfield from "./textFieldCustom";
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

export default function PasswordForm (){

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
  
    const handleChange = event => {
      setPassword(event.target.value);
  
    };
  
    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };
  

    return(



        <CssTextfield

        
            id="outlined-adornment-passwordregergeg"
            type={showPassword ? "text" : "password"}

            label="Password"
            value={password}
            onChange={handleChange}
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