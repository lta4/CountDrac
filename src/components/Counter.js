import React from "react"
import { useGlobalState } from "../GlobalState"

const Counter = (props) => {

    const contextData = useGlobalState()

    return <div className="buttons">
        <h1>{contextData.state.counter}</h1>  
        <button onClick={() => contextData.dispatch({type: "add", payload: 1})} className="button" id="one">+ 1</button>
        <button onClick={() => contextData.dispatch({type: "add", payload: 2})} className="button">+ 2</button>
        <button onClick={() => contextData.dispatch({type: "subtract", payload: 1})} className="button">- 1</button>
        <button onClick={() => contextData.dispatch({type: "subtract", payload: 2})} className="button">- 2</button>
        <button onClick={() => contextData.dispatch({type: "multiply", payload: 2})} className="button">* 1</button>
        <button onClick={() => contextData.dispatch({type: "multiply", payload: 2})} className="button">* 2</button>
        <button onClick={() => contextData.dispatch({type: "multiply", payload: 0})} className="button">* 0</button>
        <button onClick={() => contextData.dispatch({type: "divide", payload: 2})} className="button">% 1</button>
        <button onClick={() => contextData.dispatch({type: "divide", payload: 2})} className="button">% 2</button>
    </div>
}

export default Counter