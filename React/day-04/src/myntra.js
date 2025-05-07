import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header";
import Card from "./component/card";
import arr from "./utils/arr.jsx"; 

function sortedArr(arr, setarr){
       
    arr.sort((a,b)=>a.price - b.price);
    setarr([...arr]);
    
}
     
function App(){
    
    let [A, setA] = useState(arr);
    // function sort(){
    //     A.sort((a,b)=>a.price - b.price);
                // setA(A); is wrong cz setA still pointing to the old arr A which is unsorted, cz arr is sorted in heap, but its reference is not changed here so React will see no change of the array and hence wont chnage anyting in UI 
                // so first make the clone of the arr/obj, using spread opr, then pass it to the setA 
    //     setA([...A]);
    // }

    return (
        <>
            <Header/>   
            {/* <button onClick={sort}>Sort</button> */}
            <button onClick={()=> sortedArr(A,setA)}>Sort</button>

            <div className="card-body" style={{display:"flex",gap:"10px", flexWrap:"wrap" }}>
                {
                    A.map((value, index)=> <Card key={index} cloth={value.cloth} offer={value.offer} price={value.price}/>)
                }
            </div>
        </>
    )
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);