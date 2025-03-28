const element = React.createElement('h1',{fontSize: "40px", backgroundColor:"blue", color:"white"},"hello, sab");
const element2 = React.createElement('h1',{fontSize: "40px", backgroundColor:"blue", color:"white"},"hello, kaise ho");
const div1 = React.createElement('div', {}, [element, element2]);

const ReactRoot = ReactDOM.createRoot(document.getElementById('root'));
ReactRoot.render(div1);
// rendering se jab tak all the things of element , doesnt get laoded, tab tak dusra event listen initiate hi nhi hoga even if u clidk other buttton 

