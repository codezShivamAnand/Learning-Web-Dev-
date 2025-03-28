import React from "react";
import ReactDOM from "react-dom/client";

/*
// this is using react 
// const element = React.createElement('h1', { key: "1", style: { fontSize: "40px", backgroundColor: "blue", color: "white" } }, "hello, sab");

// Using JSX 
const newelement = <h1>Hello Bachoo!!</h1> 

// JSX =>React.createElement() => react Element => HTML Element 
//    bable                    React           Render

// render 
const ReactRoot = ReactDOM.createRoot(document.getElementById('root'));
ReactRoot.render(newelement);
// rendering se jab tak all the things of element , doesnt get laoded, tab tak dusra event listen initiate hi nhi hoga even if u clidk other buttton 
*/

// using JSX NOW 

const name = "Shiv";
const obj = {
    backgroundColor:"blue",
    color: "yellow"
}
// TO WRITE JS VARIABLE INSIDE JSX, USE CURLY BRACES '{}'
//  REACT COMPONENT

//1. React Element
const newElement = (
    // To wrap multiple element, we use a div container or simple <> </>
    <> 
        {/* we can give id, class or styles to these , MIND IT , Class is className is JSX  */}
        
        <h1 className="sec" id="first" >Hello, Bachoo!!</h1> 
        {/* <h1 style={{backgroundColor:"blue", color: "yellow"}} >Sab thik!!</h1> */}
        <h1 style={obj} >Sab thik!! {name}</h1>
        <h2 money={23}>We can create our own attribute in Jsx</h2>
    </>
)
const ReactRoot = ReactDOM.createRoot(document.getElementById('root'));
ReactRoot.render(newElement);

// 2. Function Based component
function meet(){
    return <h1>function based component</h1>;
}

const greet  = () =>{
    return <h2>How are you</h2>
}

const Newelement3 = greet();
const Newelement4 = meet();

const elementX = <> {Newelement3} {Newelement4} </>
// ReactRoot.render(meet()); 
// ReactRoot.render(greet());

ReactRoot.render(<> {meet()} {greet()} </> );
ReactRoot.render(elementX );

// other ways to  react based component 
function Greet(props){
    return <h1>Hello, {props.name}, ur age, {props.age} </h1>;
}

const elementy = <Greet name="Shiv" age="23" />
ReactRoot.render(elementy);