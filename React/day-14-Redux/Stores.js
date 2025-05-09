import {configureStore} from "@reduxjs/toolkit";
import slice1Reducer from "./Slicer1";

const stores = configureStore({
    // store ke andr slice aur reducer ko match karwana hota hai 
    reducer: {
// slice name : corresonding reducer 
        slice1 : slice1Reducer,
    }
})

export default stores;