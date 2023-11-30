import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import './index.css'

const rootElement = document.getElementById("root");

const App = () => {
    // const [ leftCounter, setLeftCounter ] = useState(0);
    // const [ rightCounter, setRightCounter ] = useState(0);

    const [counters, setCounters] = useState({
        left: 0,
        right: 0,
        clicked: 0,
        message: 'State message'
    })

    const handleLeftClick = () => {
        const newCountersState = {
            ...counters,
            left: counters.left + 1,
            clicked: counters.clicked + 1
        }
        setCounters(newCountersState);
    }

    const handleRightClick = () => {
        setCounters({
            ...counters,
            right: counters.right +1,
            clicked: counters.clicked + 1
        })
    }

    return (
        <>
            <div className='gralContainer'>
                <div className='countersContainer'>
                    <div className='leftContainer'>
                        <h2 className='leftScore' >
                            {counters.left}
                        </h2>
                        <button className='leftBtn' onClick={ handleLeftClick }>
                            LEFT
                        </button>
                    </div>

                    <div className='rightContainer'>
                        <button className='rightBtn' onClick={ handleRightClick }>
                            RIGHT
                        </button>
                        <h2 className='rightScore' >
                            {counters.right}
                        </h2>
                    </div>
                </div>
                <div className='msgsContainer'>
                    <p>
                        Clicked {counters.clicked} times
                    </p>
                    <p>
                        {counters.message}
                    </p>
                </div>
            </div>
        </>
    )
}


ReactDOM.render(
    <App />,
    rootElement
)