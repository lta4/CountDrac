import React from "react"
import { useGlobalState } from "../GlobalState"

const Counter = (props) => {

    const contextData = useGlobalState()

    return <div>
        <h1>{contextData.state.counter}</h1>
        <button onClick={() => contextData.dispatch({type: "add", payload: 1})} className="button">Add One</button>
        <button onClick={() => contextData.dispatch({type: "add", payload: 2})} className="button">Add Two</button>
        <button onClick={() => contextData.dispatch({type: "subtract", payload: 1})} className="button">Subtract One</button>
        <button onClick={() => contextData.dispatch({type: "subtract", payload: 2})} className="button">Subtract Two</button>
        <button onClick={() => contextData.dispatch({type: "multiply", payload: 2})} className="button">Multiply Two</button>
        <button onClick={() => contextData.dispatch({type: "multiply", payload: 0})} className="button">Multiply Zero</button>
        <button onClick={() => contextData.dispatch({type: "divide", payload: 2})} className="button">Divide Two</button>
    </div>
}

export default Counter