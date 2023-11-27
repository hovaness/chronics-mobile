import { Dispatch, SetStateAction, createContext, useContext } from "react";

interface IisLoged{
    isLog:boolean
    setIsLog: Dispatch<SetStateAction<boolean>>
}

const initialValues:IisLoged ={
    isLog: true,
    setIsLog:()=>undefined,
}

export const LogContext = createContext(initialValues)
export const useContextForLog = () => useContext(LogContext)