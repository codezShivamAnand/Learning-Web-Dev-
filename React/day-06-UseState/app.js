import React, {useState} from "react";
import ReactDOM from "react-dom/client";
// import from 
// import './styles.css';

function App(){
    // let count = 0;
    let [count, setCount] = useState(0);// count = 0, initialised
    function IncrementNum(){
        count += 1;
        setCount(count);
    }
    return (
        <div className="first">
            <h1>Count is :{count} </h1>
            <button onClick={IncrementNum}>Increment {count}</button>
            <button onClick={()=>setCount(count-1)} >Decrement {count}</button>

        </div>
    )
}
const ReactRoot = ReactDOM.createRoot(document.getElementById('root'));
ReactRoot.render(<App/>);