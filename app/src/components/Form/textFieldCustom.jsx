import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


const TextfieldInput = styled(TextField)({


  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'grey',
    },
    '&:hover fieldset': {
      borderColor: 'grey',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
      
    },    
    'fieldset': {
      borderColor: 'white',
    },
  },
  '& p':{
    color:'red',
  },
  input: {
  color: 'white',
},
  label: {
  color: 'rgba(171,171,171,1)',
  },

});

export default function CssTextfield(props) {
  return (

      <TextfieldInput sx = {{margin:'10px'}} autoComplete={props.autoComplete} onBlur={props.onBlur} onChange={props.onChange} value={props.value} label={props.label} type={props.type} InputProps = {props.InputProps} helperText = {props.helperText}/>
);

  }


