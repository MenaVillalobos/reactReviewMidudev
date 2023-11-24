import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import './oldIndex.css'

const rootElement = document.getElementById("root");

const App = (props) => {
    const [counter, updateCounter] = useState(0); //receives state's initial value as parameter
    console.log('status updated', counter ,'times');

    const handleIncreaseClick =() => {
        updateCounter( prevState => prevState + 1);
    }
    const handleResetClick =() => {
        updateCounter( 0 );
    }
    const handleDecreaseClick =() => {
        updateCounter( prevState => prevState - 1);
    }

    const isEven = counter % 2 === 0;

    return <>
        <div className='gralContainer'>
                <h1 className='tittle'>React Review:</h1>
                <h2 className='counter'>{counter}</h2>  
                <p className='even'>{ isEven ? 'Is a pair number' : 'Is an odd number' }</p>
            <div className='btnsContainer'>
                <button
                    className='decreaseBtn'
                    onClick={ handleDecreaseClick }
                >
                    -
                </button>
                <button
                    className='resetBtn'
                    onClick={ handleResetClick }
                >
                    Reset
                </button>
                <button
                    className='increaseBtn'
                    onClick={ handleIncreaseClick }
                >
                    +
                </button>
            </div>
        </div>
    </>
}

ReactDOM.render(
    <App />,
    rootElement
)