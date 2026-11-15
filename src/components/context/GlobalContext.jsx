import { createContext, useEffect, useReducer } from "react";

//firebase
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export const GlobalContext = createContext()

const  changeState = (state, action) => {
    const {type, payload} = action

    switch(type) {
        case "LOGIN":
            return {...state, user: payload}
        case "LOGOUT":
            return {...state, user: null}
        case "AUTH_READY":
            return {...state, authReady: true}   
        default: 
            return state        
    }
}

export const GlobalContextProvider = ({children}) => {

    const [state, dispetch] = useReducer(changeState, {
        user: null,
        authReady: false
    })
   
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            dispetch({type:"LOGIN", payload: user})
            dispetch({type: "AUTH_READY", payload: true})
        })
    }, [])
    
    return <GlobalContext.Provider value={{...state, dispetch}}>
        {children}
    </GlobalContext.Provider>
}