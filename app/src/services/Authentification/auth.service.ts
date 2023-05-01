import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

type DecodedToken = {
    sub: string;
    exp: number;
}


export const UserLogin = async (username:string, password:string) => {

    const res = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/auth/login`,{username, password})
    return res;
}

export const DecodeJWT = (data:string) =>{
    var decoded:DecodedToken = jwt_decode(data);
    return decoded;
}

export const SetToken = (token:string, expiredDate:Date) => {
    Cookies.set('access_token', token, {expiredDate});
}
