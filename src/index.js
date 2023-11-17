import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import './index.css'

const rootElement = document.getElementById("root");

const App = (props) => {
    const [counter, updateCounter] = useState(0); //receives state's initial value as parameter
    console.log('status updated', counter ,'times');

    const handleIncreaseClick =() => {
        updateCounter( counter + 1 );
    }
    const handleResetClick =() => {
        updateCounter( 0 );
    }
    const handleDecreaseClick =() => {
        updateCounter( counter - 1 );
    }

    return <>
        <h1 className='tittle'>Setting the same as in the example</h1>
        <h2 className='counter'>{counter}</h2>
        <button
            className='increaseBtn'
            onClick={ handleIncreaseClick }
        >
            +
        </button>
        <button
            className='increaseBtn'
            onClick={ handleResetClick }
        >
            Reset
        </button>
        <button
            className='increaseBtn'
            onClick={ handleDecreaseClick }
        >
            -
        </button>
    </>
}

ReactDOM.render(
    <App />,
    rootElement
)