import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';


type CustomTexfieldType ={
  name:string;
  autoComplete?:string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange:(event:React.ChangeEvent<HTMLInputElement>) => void;
  value:string;
  label:string;
  helperText?:string;
  type?:string;
  InputProps?: Partial<OutlinedInputProps>;
  id:string;
  sx?: any;

  

}


const CssTextfield:React.FC<CustomTexfieldType> =(props) => {
  
    return (

        <TextField   sx = {{margin:'10px',  ...props.sx}} name = {props.name} autoComplete={props.autoComplete} onBlur={props.onBlur} onChange={props.onChange} value={props.value} label={props.label} type={props.type} InputProps = {props.InputProps} helperText = {props.helperText}/>
    );

}

export default CssTextfield;


