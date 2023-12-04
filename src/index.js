import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import './index.css'

const WarningNotUsed = () => {
    return <h2> ⚠️ Counter is not used yet ⚠️ </h2>
};
const ClicksList = ({ clicks }) => {
    return <p> { clicks.join( ', ' ) }</p>
};

const INITIAL_COUNTER_STATE = {
    left: 2,
    right: 4,
    message: 'State message'
};

const App = () => {
    // const [ leftCounter, setLeftCounter ] = useState(0);
    // const [ rightCounter, setRightCounter ] = useState(0);

    const [ counters, setCounters ] = useState( INITIAL_COUNTER_STATE );
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

    const handleReset = () => {
        setCounters( INITIAL_COUNTER_STATE );
        setClicks([]);
    }

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
                        <button onClick={ handleReset }>RESET</button>
                    </p>
                    <p>
                        Clicked { clicks.length } times
                    </p>
                    { clicks.length === 0 
                        ? <WarningNotUsed/> 
                        : <ClicksList clicks = { clicks } />
                    }
                </div>
            </div>
        </>
    )
}


const rootElement = document.getElementById("root");
ReactDOM.render(
    <App />,
    rootElement
)