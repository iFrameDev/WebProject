import React, {useState, useEffect} from 'react'
import Cookies from "js-cookie";
import { useAuth } from '../contexts/AuthProvider';


export default function UserProfil() {

    const [localUsername, setLocalUsername] = useState('');
    const {isAuthenticated} = useAuth();

    useEffect(() => {

        if(isAuthenticated){

            const storedUsername = Cookies.get('username');
            if (storedUsername) {
                setLocalUsername(storedUsername);
            }
        }
        else {

            const storedUsername = Cookies.get('username');
            if (storedUsername) {
                Cookies.remove('username')
                setLocalUsername('');
            }

        }

    }, [isAuthenticated]); 

    return (
        <p>De retour {localUsername} !!</p>
    );
}
