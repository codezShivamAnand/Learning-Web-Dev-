import React,{useState, useEffect, useMemo,useCallback} from "react";
import ReactDOM from "react-dom/client";

// function fibbonnaci(n){
//     if(n <= 1)return n;
//     return fibbonnaci(n-1)+fibbonnaci(n-2);
// }

function App(){

    const [count, setCount] = useState(0);
    const [number, setnumber] = useState(""); 
    // const [result, setresult] = useState("");
    
    // Calculate Fibbonacci, we can also write this function outside as a global variable to prevent it from re-rendering everytime  
    // function fibbonnaci(n){
    //     if(n <= 1)return n;
    //     return fibbonnaci(n-1)+fibbonnaci(n-2);
    // }

    // we can also use useCallback fxn to get fibbonaci 
    const fibbonnaci = useCallback((n)=>{
        if(n <= 1)return n;
        return fibbonnaci(n-1)+fibbonnaci(n-2);
    },[])

    const result = useMemo(()=>{
        return fibbonnaci(number)
    },[number]);

    // useEffect(()=>{ // runs at last
    //     setresult(fibbonnaci(number));
    // },[number])

    return(
        <>
            <h1>Counter is: {count}</h1>
            <button onClick={ ()=>setCount(count+1) }>Increment</button>
            <button onClick={ ()=>setCount(count-1) }>Decrement</button>

            <div>
                <h2>Fibboncci Number is: {result}</h2>
                <input type="number" value= {number} onChange={ (e)=>setnumber(e.target.value) }></input>
            </div>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)