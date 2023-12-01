import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import './index.css'

const rootElement = document.getElementById("root");

const App = () => {
    // const [ leftCounter, setLeftCounter ] = useState(0);
    // const [ rightCounter, setRightCounter ] = useState(0);

    const [ counters, setCounters ] = useState({
        left: 0,
        right: 0,
        message: 'State message'
    });
    const [ clicks, setClicks ] = useState([]);

    const handleLeftClick = () => {
        const newCountersState = {
            ...counters,
            left: counters.left + 1,
        }
        setCounters(newCountersState);
        setClicks( prevClicks => (
            [ ...prevClicks, 'Left' ])
        )};
    const handleRightClick = () => {
        setCounters({
            ...counters,
            right: counters.right +1,
        })
        setClicks( prevClicks => (
            [ ...prevClicks, 'Right' ])
        );
    };

    return (
        <>
            <div className='gralContainer'>
                <div className='countersContainer'>
                    <div className='leftContainer'>
                        <h2 className='leftScore' >
                            { counters.left }
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
                            { counters.right }
                        </h2>
                    </div>
                </div>
                <div className='msgsContainer'>
                    <p>
                        Clicked { clicks.length } times
                    </p>
                    <p>
                        { clicks.join( ', ' ) }
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