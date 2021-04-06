import React from "react"

const initialState = { 
    counter: 0
}

const reducer = (state, action) => {
    const {type, payload} = action
    let newState;

    switch(type){
        case "add":
            newState = {...state, counter: state.counter + payload}
            return newState
            break

        case "subtract":
            newState = {...state, counter: state.counter - payload}
            return newState
            break

        default: return state
    }
}

export const FirstContext = React.createContext(null)

export const GlobalState = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    const contextData = {
        state,
        dispatch
    }

    return <FirstContext.Provider value={contextData}>
        {props.children}
    </FirstContext.Provider>
}

export const useGlobalState = () => {
    return React.useContext(FirstContext)
}