import { Box } from "@mui/material";
import React from "react";
import SendIcon from '@mui/icons-material/Send';
import CssTextfield from "../Form/textFieldCustom";
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Typography from '@mui/material/Typography';
import BasicSelect from "./selectTypeSubsystem";
import { styled } from '@mui/material/styles';



type devblogForm = {
    label?:string;
    value:string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name:string;

}

function onchange(){

}

const CreateDevblogComponent = () => {
    return(
            <Box sx={{display:'flex', flexDirection:'column', m:2,p:1}}>

                <Typography sx={{letterSpacing: '.1rem',p:1,borderLeft: 3, borderColor:'#e6cd0b', backgroundColor:'rgb(67 71 77 / 30%)'}}  display="block" component="div" style={{ color:'white' ,fontSize: '24px'}} >

                    EDITOR DEVBLOG

                </Typography> 

                <Box sx={{ m:2, p:1, display:'flex', flexDirection:'column', backgroundColor:'rgb(67 71 77 / 30%)'}}>

                    <CssTextfield

                        name="test"
                        label="Title devblog"
                        id="filled-size-normal"
                        onChange={() => onchange()}
                        value=""

                    />
                    <CssTextfield

                        name="test"
                        label="Description"
                        id="filled-size-normal"
                        onChange={() => onchange()}
                        value=""

                    />

                </Box>

                <Typography sx={{m:3, letterSpacing: '.1rem',p:1,borderLeft: 3, borderColor:'#e6cd0b', backgroundColor:'rgb(67 71 77 / 30%)'}}  display="block" component="div" style={{ color:'white' ,fontSize: '20px'}} >

                    SUBSYSTEM

                </Typography> 

                <Box sx={{m:3, p:1, display:'flex', flexDirection:'column', backgroundColor:'rgb(67 71 77 / 30%)'}}>

                    <CssTextfield

                        name="test"
                        label="title system"
                        id="filled-size-normal"
                        onChange={() => onchange()}
                        value=""

                    />
                    <CssTextfield

                        name="test"
                        label="Auteur system"
                        id="filled-size-normal"
                        onChange={() => onchange()}
                        value=""

                    />

                    <BasicSelect  ageValue="System Type"  />
                    
                    <CssTextfield

                        name="test"
                        label="Description system"
                        id="filled-size-normal"
                        onChange={() => onchange()}
                        value=""

                    />

                    

                    <Box sx={{m:1, display:'flex', flexDirection:'row-reverse'}}> 
                        
                        <Button sx={{backgroundColor:'rgb(67 71 77 / 30%)', display:'flex',maxWidth:'300px'}} variant="contained" endIcon={<AddCircleIcon/>}>
                            Add new subsystem
                        </Button>

                    </Box>

                   

                </Box>

                <Button sx={{minHeight:'60px', backgroundColor:'rgb(67 71 77 / 30%)'}} variant="contained">
                            Submit Devblog
                </Button>

            </Box>


    );
}

export default CreateDevblogComponent;