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
  color: 'white',
  },

});

export default function CssTextfield(props) {
  return (

      <TextfieldInput label={props.label}/>
);

  }


