import React,{useState, useEffect, useMemo,useCallback, useRef} from "react";
import ReactDOM from "react-dom/client";

// function Learn(){
//     const [count, setcount] = useState(0);
//     const money = useRef(0);

//     return(
//         <>
//             <h1>Counter: {count}</h1>
//             <button onClick={ ()=>setcount(count+1) } >Increment</button>
//             <h2>Money: {money.current}</h2>
//             <button onClick={ ()=>{
//                 money.current = money.current+1
//                 console.log(money.current);
//                 } 
//                 } >Increment</button>
//         </>
//     )

// }
// ReactDOM.createRoot(document.getElementById('root')).render(<Learn/>);

function Stopwatch(){
    const [time, settime] = useState(0);
    const intervalRef = useRef(0);
    console.log(intervalRef); // {current: 0}
    
    function start(){
        intervalRef.current = setInterval(()=>{
            settime((latest)=>latest+1); // settime(latest => latest+1);
        }, 1000)
    }
    function stop(){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }
    function reset(){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        settime(0);
    }
    return(
        <>
            <h1>Stopwatch time: {time}</h1>
            <br></br>
            <button onClick={()=>start()}>Start</button>
            <br></br>
            <button onClick={stop}>stop</button>
            <br></br>
            <button onClick={reset}>reset</button>
        </>
        
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Stopwatch/>);
