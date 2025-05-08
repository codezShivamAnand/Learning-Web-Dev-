import React, {useState} from "react";
import ReactDOM from "react-dom/client";
// import './styles.css';

function App(){
    return (
        <>
            <h1>Background Color Changer</h1>
            <div className="but">
                <button style={{backgroundColor: "red"}} >red</button>
                <button style={{backgroundColor: "orange"}} >orange</button>
                <button style={{backgroundColor: "hotpink"}} >hotpink</button>
                <button style={{backgroundColor: "blue"}} >blue</button>
            </div>
        </>
    )
}
const ReactRoot = ReactDOM.createRoot(document.getElementById('root'));
ReactRoot.render(<App/>);