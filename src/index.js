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

    const isEven = counter % 2 === 0;

    return <>
        <h1 className='tittle'>Setting the same as in the example</h1>
        <h2 className='counter'>{counter}</h2>
        <p className='even'>{ isEven ? 'Is a pair number' : 'Is an odd number' }</p>
        <button
            className='increaseBtn'
            onClick={ handleIncreaseClick }
        >
            +
        </button>
        <button
            className='resetBtn'
            onClick={ handleResetClick }
        >
            Reset
        </button>
        <button
            className='decreaseBtn'
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