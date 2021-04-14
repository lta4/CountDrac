import React from "react"
import { useGlobalState } from "../GlobalState"

const Counter = (props) => {

    const contextData = useGlobalState()

    return <div className="buttons">
        <h1>{contextData.state.counter}</h1>  
        <button onClick={() => contextData.dispatch({type: "add", payload: 1})} className="button" id="one">Add 1</button>
        <button onClick={() => contextData.dispatch({type: "add", payload: 2})} className="button">Add 2</button>
        <button onClick={() => contextData.dispatch({type: "subtract", payload: 1})} className="button">Subtract 1</button>
        <button onClick={() => contextData.dispatch({type: "subtract", payload: 2})} className="button">Subtract 2</button>
        <button onClick={() => contextData.dispatch({type: "multiply", payload: 2})} className="button">Multiply 1</button>
        <button onClick={() => contextData.dispatch({type: "multiply", payload: 2})} className="button">Multiply 2</button>
        <button onClick={() => contextData.dispatch({type: "multiply", payload: 0})} className="button">Multiply 0</button>
        <button onClick={() => contextData.dispatch({type: "divide", payload: 2})} className="button">Divide 1</button>
        <button onClick={() => contextData.dispatch({type: "divide", payload: 2})} className="button">Divide 2</button>
    </div>
}

export default Counter