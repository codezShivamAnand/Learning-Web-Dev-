import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header";
import Card from "./component/card";
import arr from "./utils/arr.jsx"; 

function Sort(){
    return (
        <button id="filter">Sort</button>
    )
}
     
function App(){
    return (
        <>
            <Header/>
            <div className="card-body" style={{display:"flex",gap:"10px", flexWrap:"wrap" }}>
                <Sort/>
                
                {
                    arr.map((value, index)=> <Card key={index} cloth={value.cloth} offer={value.offer} price={value.price}/>)
                }
            </div>
        </>
    )
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);