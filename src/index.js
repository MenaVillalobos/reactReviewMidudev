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

const App = () => {
    // const [ leftCounter, setLeftCounter ] = useState(0);
    // const [ rightCounter, setRightCounter ] = useState(0);


    const [ clicks, setClicks ] = useState([]);

    const handleLeftClick = () => {
        setClicks( prevClicks => (
            [ ...prevClicks, 'Left' ])
        )};
    const handleRightClick = () => {
        setClicks( prevClicks => (
            [ ...prevClicks, 'Right' ])
        );
    };

    const handleReset = () => {
        setClicks([]);
    }

    const leftCounter = clicks.filter( click => click === 'Left');
    const rightCounter = clicks.filter( click => click === 'Right');

    return (
        <>
            <div className='gralContainer'>
                <div className='countersContainer'>
                    <div className='leftContainer'>
                        <h2 className='leftScore' >
                            { leftCounter.length }
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
                            { rightCounter.length }
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