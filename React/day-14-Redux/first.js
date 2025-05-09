import React from "react";
import ReactDOM from "react-dom/client";
import Counting from "./Counting";
import {Provider} from "react-redux";
import stores from "./Stores";

function App(){
    return (
        <>
        <Provider store={stores} >
        <Counting />
        </Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)