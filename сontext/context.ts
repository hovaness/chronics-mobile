
import React, {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState,
  } from 'react'
  interface IproductsInCart {
    productsInCart: number
    setProductsInCart: Dispatch<SetStateAction<number>>
  }
  
  const initialValues:IproductsInCart = {
    productsInCart: 0,
    setProductsInCart: () => undefined,
  }
  export const CartContext = createContext(initialValues)
  

export const useStatisticContext = () => useContext(CartContext)