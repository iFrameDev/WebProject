import {useState, useEffect} from 'react'
import { useAuth } from '../contexts/AuthProvider';


export default function UserProfil() {

    const [localUsername, setLocalUsername] = useState('');
    const {isAuthenticated, userData} = useAuth();

    useEffect(() => {
        setLocalUsername(isAuthenticated ? userData.username : '');
      }, [isAuthenticated, userData.username]); 

    return (
        isAuthenticated ? (<p>{localUsername} </p>) : null
    );
}
