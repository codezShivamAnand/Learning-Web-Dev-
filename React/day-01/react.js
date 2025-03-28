const element = React.createElement("h1",{},"Hello Coder Army");

// ReactDOM.render(element,document.getElementById('root')); // Depricated in React 18 

// REACT 18
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// Reactroot container: ke andr element ko 
Reactroot.render(element);   