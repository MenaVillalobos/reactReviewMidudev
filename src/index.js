import React from "react";
import ReactDOM from "react-dom";
import './index.css'

const rootElement = document.getElementById("root");

const App = (props) => {
    return <>
        <h1>Setting the same as in the example</h1>
        <h2 className='counter'>{props.initialCounter}</h2>
    </>
}

ReactDOM.render(
    <App initialCounter={0}/>,
    rootElement
)