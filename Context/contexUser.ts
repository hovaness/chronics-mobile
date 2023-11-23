
import React, {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState,
  } from 'react'
import IUser from '../models/IUser'
  interface IUserData {
    user: IUser
    setUser: Dispatch<SetStateAction<IUser>>
    isLog:boolean
    setIsLog: Dispatch<SetStateAction<boolean>>
    
  }
  const initialValues: IUserData = {
    user: undefined,
    setUser: () => undefined,
    isLog: true,
    setIsLog:()=>undefined,

  }
 
  export const UserContext = createContext(initialValues)
  

export const useUserContext = () => useContext(UserContext)