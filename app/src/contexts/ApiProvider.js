import { useContext, createContext } from "react";
import API_CLIENT from "../services/api";

const ApiContext = createContext();

export default function ApiProvider({children}){

    const api = new API_CLIENT();
    return(

        <ApiContext.Provider value={api}>
            {children}
        </ApiContext.Provider>
    );
}

export function UseApi(){
    return useContext(ApiContext)
}
