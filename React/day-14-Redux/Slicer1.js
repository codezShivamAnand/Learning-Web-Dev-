import {createSlice} from "@reduxjs/toolkit";
// create karna ke liye toolkit ka use 

const reactslicer = createSlice({
    name: "Slice1",
    initialState: {count:0}, // the starting state
    reducers: {
        Increment: (state)=>{state.count = state.count+1},
        Decrement: (state)=> {state.count = state.count-1},
        Reset: (state) => {state.count=0}
    }
})
// this will just create slice 

// export Increment, Decrement, Reset to react code 
export const {Increment, Decrement, Reset} = reactslicer.actions;
export default reactslicer.reducer;