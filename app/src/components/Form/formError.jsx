import { Typography } from "@mui/material";
import React from "react";
import Box from '@mui/material/Box';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default function FormError({errorText = ''}){

    return(

        <Box sx={{display:'flex', flexDirection:'row', alignItems: 'center' }}>

            <WarningAmberIcon sx={{p:1, color:'red'}}/>
            <Typography sx={{color:'red', fontSize: 14 }}>{errorText}</Typography>

        </Box>

    )
}