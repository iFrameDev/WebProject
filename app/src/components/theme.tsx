
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  

  components: {

    


    MuiTextField: {
      styleOverrides: {
        root: {

          
          '& p': {
            color: 'red',
          },
          '& input': {
            color: 'rgb(52, 71, 103)',
          },
          '& label': {
            color: 'rgb(52, 71, 103)',
          },
          
          
        },
      },
    },
    MuiSelect: {
   
      styleOverrides: {

        select: {
            

          color:'rgb(52, 71, 103)',

          borderColor:'white',
          '&:focus': {
            borderColor: 'white',
          },
          root:{
            color:'rgb(52, 71, 103)',
            'fieldset': {
                color: 'rgb(52, 71, 103)',
              },
              
          },

        },
        

        icon: {
          color: 'white',
        },

      },
    },

    MuiInputLabel: {
        styleOverrides: {
            root:{
                color:'rgb(52, 71, 103)',
                
            },

            
          outlined: {
            '&.Mui-focused': {
              color: 'rgb(52, 71, 103)', // Couleur de l'étiquette lorsqu'elle est en focus
              borderColor:'rgb(52, 71, 103)'
            }
          },
        },
    },

    MuiOutlinedInput: {
        
        styleOverrides: {
          root: {
            
            

            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgb(52, 71, 103)',
              borderWidth: '2px',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgb(52, 71, 103)',
                borderWidth: '2px',
              },

            'fieldset': {
                borderColor:'rgb(52, 71, 103)',
              },


            
            
          },
        },
      },
  },
  
  
});

export default theme;