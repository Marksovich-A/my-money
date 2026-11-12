import { createContext, useReducer } from "react";

export const GlobalContext = createContext()

const  changeState = (state, action) => {
    const {type, payload} = action

    switch(type) {
        case "LOGIN":
            return {...state, user: payload}
        case "LOGOUT":
            return {...state, user: null}
        default: 
            return state        
    }
}

export const GlobalContextProvider = ({children}) => {
    const [state, dispetch] = useReducer(changeState, {
        user: null
    })
    return <GlobalContext.Provider value={{...state, dispetch}}>
        {children}
    </GlobalContext.Provider>
}