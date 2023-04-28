import axios from "axios";

export const UserLogin = async (username:string, password:string) => {

    const res = await axios.post(`${process.env.REACT_APP_BASE_API_URL}/auth/login`,{username, password})
    return res;
}
