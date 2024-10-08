import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import { AxiosResponse } from 'axios';

type DecodedToken = {
    sub: string;
    exp: number;
}

export type LoginResponse = {
    access_token:string;
    exp:Date;
    status:number;
    data:string;
    username:string;
    user_id: number;
}


export const UserLogin = async (username: string, password: string): Promise<AxiosResponse> => {
    try {
        const res: AxiosResponse = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/auth/signin`, { username, password });
        return res;
    } catch (error) {
        throw error; // Vous pouvez gérer l'erreur ici ou la propager vers le composant qui appelle cette fonction.
    }
};

export const DecodeJWT = (data:string) =>{
    var decoded:DecodedToken = jwt_decode(data);
    return decoded;
}

export const SetToken = (token:string, expiredDate:Date) => {
    Cookies.set('access_token', token, {expiredDate});
}
