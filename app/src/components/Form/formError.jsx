import { Typography } from "@mui/material";
import React from "react";

export default function FormError({errorText = ''}){

    return(

        <Typography sx={{color:'red', fontSize: 13 }}>{errorText}</Typography>

    )
}