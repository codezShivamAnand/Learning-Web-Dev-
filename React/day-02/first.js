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

const element = React.createElement('h1',{fontSize: "40px", backgroundColor:"blue", color:"white"},"hello, sab");
const element2 = React.createElement('h1',{fontSize: "40px", backgroundColor:"blue", color:"white"},"hello, kaise ho");

const ReactDOM = {
    render : function(element, root){   
        root.append(element);
    }
}
ReactDOM.render(element, document.getElementById("root"));
