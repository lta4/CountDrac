import React from "react"
import { useGlobalState } from "../GlobalState"

const Counter = (props) => {

    const contextData = useGlobalState()

    return <div>
        <h1>{contextData.state.counter}</h1>
        <button onClick={() => contextData.dispatch({type: "add", payload: 1})}>Add One</button>
        <button onClick={() => contextData.dispatch({type: "add", payload: 2})}>Add Two</button>
        <button onClick={() => contextData.dispatch({type: "subtract", payload: 1})}>Subtract One</button>
        <button onClick={() => contextData.dispatch({type: "subtract", payload: 2})}>Subtract Two</button>
        <button onClick={() => contextData.dispatch({type: "multiply", payload: 2})}>Multiply Two</button>
        <button onClick={() => contextData.dispatch({type: "multiply", payload: 0})}>Multiply Zero</button>
        <button onClick={() => contextData.dispatch({type: "divide", payload: 2})}>Divide Two</button>
    </div>
}

export default Counter