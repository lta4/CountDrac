import React from "react"
import { useGlobalState } from "../GlobalState"

const Counter = (props) => {

    const contextData = useGlobalState()

    return <div>
        <h1>{contextData.state.counter}</h1>
        <button onClick={() => contextData.dispatch({type: "add", payload: 1})}>Add One</button>
        <button onClick={() => contextData.dispatch({type: "add", payload: 2})}>Add Two</button>
        <button onClick={() => contextData.dispatch({type: "subtract", payload: 1})}>Subtract One</button>
    </div>
}

export default Counter