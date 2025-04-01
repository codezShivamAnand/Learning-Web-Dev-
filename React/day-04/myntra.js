import React from "react";
import ReactDOM from "react-dom/client";

// HEADER 
//BODY 
// FOOTER   
function Card( props){
    return (
        <div style={{border:"2px solid black", padding: "8px",}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV3L_uxFDJzqMc4Fl2fUg-SCNoMef6b38MIQ&s" height="200px" width="200px" alt="Tshirt" />
            <div style={{textAlign: "center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
        
    )
}
const arr = [{cloth:"Jeans", offer:"40-60%off"}, {cloth:"Suits", offer:"10-20%off"},{cloth:"Kurtas", offer:"Flat 50%off"}, {cloth:"UnderWear", offer:"20-50%off"}, {cloth:"BottomWear", offer:"20-80%off"},{cloth:"BottomWear", offer:"20-80%off"}, { cloth:"Shirts", offer:"20-60%off"},{cloth:"Lenhnga", offer:"10-30%off"},{cloth:"T-shirt", offer:"20-60%off"},{cloth:"T-shirt", offer:"20-60%off"}, {cloth:"T-shirt", offer:"20-60%off"},{cloth:"T-shirt", offer:"20-60%off"}] ;
     
function App(){
    return (
        <div style={{display:"flex",gap:"10px", flexWrap:"wrap" }}>
            {/* Calling function 'Card' in JSX  */}
            {/* <Card cloth="T-shirt" offer="10-40%off" /> 
            <Card cloth="Jeans" offer="40-60%off" /> 
            <Card cloth="Suits" offer="10-20%off" /> 
            <Card cloth="Kurtas" offer="Flat 50%off" /> 
            <Card cloth="UnderWear" offer="20-50%off" /> 
            <Card cloth="BottomWear" offer="20-80%off" /> 
            <Card cloth="Shirts" offer="20-60%off" /> 
            <Card cloth="Lenhnga" offer="10-30%off" /> 
            <Card cloth="T-shirt" offer="20-60%off" /> 
            <Card cloth="T-shirt" offer="20-60%off" /> 
            <Card cloth="T-shirt" offer="20-60%off" /> 
            <Card cloth="T-shirt" offer="20-60%off" /> 
            <Card cloth="T-shirt" offer="20-60%off" />  */}
            {
                arr.map((value, index)=> <Card key={index} cloth={value.cloth} offer={value.offer}/>)
            }
            {/* arr.map returns an array, which jsx can read 
                arr.map returns -> [<Card cloth="Jeans" offer="40-60%off"/>,
                                    <Card cloth="Suits" offer="10-20%off" />,
                                    <Card cloth="Kurtas" offer="Flat 50%off" />, 
                                    <Card cloth="UnderWear" offer="20-50%off" />, 
                                    <Card cloth="BottomWear" offer="20-80%off" />, 
                                    <Card cloth="Shirts" offer="20-60%off" />,
                                    <Card cloth="Lenhnga" offer="10-30%off" /> ] which jsx can read 
                We can't use for loop here */}
        </div>
    )
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);