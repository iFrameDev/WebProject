import axios from 'axios';

export default class API_CLIENT{

    constructor(){

        this.base_url = process.env.REACT_APP_BASE_API_URL;
    }

    async Post(url, data){

        try {

            
            const res = await axios.post(this.base_url + url, data)
            return res;

        }
        catch(error){
            return error.response.data;
        }
        
    }



}