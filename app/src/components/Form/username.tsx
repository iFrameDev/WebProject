import CssTextfield from "./textFieldCustom";



type usernamePropsType = {

    name:string;
    label:string;
    value:string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    sx?: any;

}

const UsernameForm:React.FC<usernamePropsType> = (props) => {

    


    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {


        if (props.handleBlur) {
            return props.handleBlur(event);
        }

        
    };

    return (

        <CssTextfield
        
        name={props.name}
        label={props.label}
        value={props.value}
        onBlur={handleBlur}
        onChange={props.onChange}

        id="outlined-adornment-password"

        sx={{ color : 'red' ,m: 1, width: '25ch'}}         
        autoComplete='off'
    />

    );
}

export default UsernameForm;