import { useState } from "react";
import { createContext } from "react";
import api from "../services/api";

export const CalcContext = createContext({});

const CalcProvider = ({ children }) => {

    const [recivedValues, setRecivedValues] = useState()
    
    const onHandleChange = (data) =>{
        api.post("", data)
            .then((response) => {
                setRecivedValues(response.data)

            })
            .catch((err) => {
                console.log(err)
            });
    }

    return <CalcContext.Provider value={{onHandleChange, recivedValues}}>{children}</CalcContext.Provider>;
};

export default CalcProvider;
