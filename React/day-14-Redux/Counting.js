import {useSelector, useDispatch} from "react-redux";
import {Increment, Decrement, Reset} from "./Slicer1";

// this is the react file , it communicates with the redux files with the help of a useSelector Hook 

export default function Counting(){
    const count = useSelector((state) => state.slice1.count);
    // state is a global state which stores all the states variables present in the store

    const dispatch = useDispatch();
    return(
        <>
            <h1>Counter is {count}</h1>
            <button onClick={()=> dispatch(Increment())} >Increment</button>
            <button onClick={()=> dispatch(Decrement())} >Decrement</button>
            <button onClick={()=> dispatch(Reset())} >Reset</button>
        </>
    )
}