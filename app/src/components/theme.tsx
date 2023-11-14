import { yellow } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  components: {


    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: 'white',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
            'fieldset': {
              borderColor: 'white',
            },
            

          },
          '& p': {
            color: 'red',
          },
          '& input': {
            color: 'white',
          },
          '& label': {
            color: 'white',
          },
          
          
        },
      },
    },
    MuiSelect: {
   
      styleOverrides: {

        select: {
            

          color:'white',

          borderColor:'white',
          '&:focus': {
            borderColor: 'white',
          },
          root:{
            color:'white',
            'fieldset': {
                color: 'white',
              },
              
          },
          '&.Mui-focused': {
            borderColor: 'white', // Remplace la couleur de la bordure en focus
          },
        },
        

        icon: {
          color: 'white',
        },

      },
    },
    MuiInputLabel: {
        styleOverrides: {

            
          outlined: {
            '&.Mui-focused': {
              color: 'white', // Couleur de l'étiquette lorsqu'elle est en focus
              borderColor:'white'
            },
            root:{
                color:'white'
            }
            
          },
        },
    },
    MuiInputBase:{
        styleOverrides: {
            

            root:{
                color:'white',


            }

              

          },

    },
    /*MuiOutlinedInput:{

        styleOverrides: {


            
            
            root:{
                '&.MuiOutlinedInput-notchedOutline':{

                    borderColor:'white',
    
                },

                color:'white',
                'fieldset': {
                    color: 'white',
                  }
            },

            notchedOutline:{
                root:{
                    '&MuiOutlinedInput-notchedOutline':{

                        borderColor:'white',
        
                    },

                },
                '&.MuiOutlinedInput-notchedOutline':{

                    borderColor:'red',
    
                },
                borderColor:'red',
                '&.Mui-focused': {
                    color: 'white', // Couleur de l'étiquette lorsqu'elle est en focus
                    borderColor:'white'
                  },
                  'fieldset': {
                    color: 'white',
                  },
                  '&MuiOutlinedInput-notchedOutline':{

                    borderColor:'white',
    
                },
            },
            
            

        }

    }*/    
    MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
              borderWidth: '2px',
            },
          },
        },
      },
  },
  
});

export default theme;