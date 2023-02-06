import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


const CssTextfield = styled(TextField)({
  '& label.Mui-focused': {
    color: 'rgb(112,101,240)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'grey',
    },
    '&:hover fieldset': {
      borderColor: 'rgb(112,101,240)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgb(112,101,240)',
      
    },    
    'fieldset': {
      borderColor: 'rgb(112,101,240)',
    },
  },
  '& p':{
    color:'red',
  },
  input: {
  color: 'black',
},
  label: {
  color: 'rgb(228,227,248)',
  },

});

export default CssTextfield;