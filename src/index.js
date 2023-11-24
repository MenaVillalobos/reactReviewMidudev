import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import './index.css'

const rootElement = document.getElementById("root");

const App = () => {
    const [ leftCounter, setLeftCounter ] = useState(0);
    const [ rightCounter, setRightCounter ] = useState(0);

    return (
        <>
            <div className='gralContainer'>
                <div className='leftContainer'>
                    <h2 className='leftScore' >
                        {leftCounter}
                    </h2>
                    <button className='leftBtn' onClick={ () => setLeftCounter( leftCounter + 1 )}>
                        LEFT
                    </button>
                </div>

                <div className='rightContainer'>
                    <button className='rightBtn' onClick={ () => setRightCounter( rightCounter + 1 )}>
                        RIGHT
                    </button>
                    <h2 className='rightScore' >
                        {rightCounter}
                    </h2>
                </div>
            </div>
        </>
    )
}


ReactDOM.render(
    <App />,
    rootElement
)