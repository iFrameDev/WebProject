import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react"


const CssTextfield = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'grey',
    },
    '&:hover fieldset': {
      borderColor: 'rgb(255,69,0)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
      
    },
  },
  input: {
  color: 'white',
},
  label: {
  color: 'grey',
  }
});


export default function InputAdornments() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = event => {
    setPassword(event.target.value);

  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', pb:3 }}>



            <CssTextfield 

                label="Username"
                id="outlined-adornment-password"
                sx={{ color : 'red' ,m: 1, width: '25ch'}}

            />

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
                                sx={{ color : 'grey'}}
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>

                        </InputAdornment>
                    ),
                }}
            />
    </Box>
);

}