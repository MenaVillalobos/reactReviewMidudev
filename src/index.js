import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import './index.css'

const rootElement = document.getElementById("root");

const App = (props) => {
    const [counter, updateCounter] = useState(0); //receives state's initial value as parameter

    return <>
        <h1 className='tittle'>Setting the same as in the example</h1>
        <h2 className='counter'>{counter}</h2>
        <button
            className='increaseBtn'
            onClick={() => {
                updateCounter( counter + 1 );
            }}
        >
            +
        </button>
    </>
}

ReactDOM.render(
    <App />,
    rootElement
)