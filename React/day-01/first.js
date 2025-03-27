const React = {
    // styles = {fontSize: "20px", backgroundColor:"blue", color:"white"}
    createElement: function(tag, styles, children){
        const element = document.createElement(tag);
        if(typeof children === 'object'){
            for(let val of children ){
                element.append(val);
            }
        }
        else {
            element.innerText = children;
        }
        // we can iterate over styles as we iterate over obj with the help of for in loop 
        for(let key in styles){
            // element.style.fontSize = "40px";
            element.style[key] = styles[key];
        }
        return element;
    }
}
const header1 = React.createElement('h1',{fontSize: "40px", backgroundColor:"blue", color:"white"},"hello, sab");

const li1 = React.createElement('li', {}, "html");
const li2 = React.createElement('li', {}, "css");
const li3 = React.createElement('li', {}, "js");

const ul = React.createElement('ul', {fontSize:"30px", backgroundColor:"hotpink", color:"white"}, [li1,li2,li3]);

// make ul 
// html 
// css
// js

// Append
const ReactDOM = {
    render : function(element, root){
        root.append(element);
    }
}
ReactDOM.render(header1, document.getElementById("root"));
ReactDOM.render(ul, document.getElementById("root"));


// 1. element banya 
// const element = document.createElement('h1');
// element.innerText = "Hello Bachoo";
// element.style.fontSize = "40px";
// element.style.color = "white";
// element.style.backgroundColor = "blue";


// const element2 = document.createElement('h1');
// element2.innerText = "How are you?";
// element2.style.fontSize = "30px";
// element2.style.color = "white";
// element2.style.backgroundColor = "green"

// append 
const root = document.getElementById("root");
root.append(element);
root.append(element2);


