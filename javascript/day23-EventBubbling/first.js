
    // Event Delegation 
const root = document.getElementById('root');
root.addEventListener('click',(event)=>{
    // console.log(event.target.tagName); // outputs : <button id="orange"></button>
    if(event.target.tagName === 'BUTTON' )
    document.body.style.backgroundColor = event.target.id;
});

//---------------------------------------------------------------------------------

// const buttons = document.querySelectorAll('button'); //nodelist 
// const body = document.body;

// buttons.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         // console.log(button.id);
//         body.style.backgroundColor = button.id;
//     });
// });

//--------------------------------------------------------------------------------------------

// const red = document.getElementById("red");
// const green = document.getElementById("green");    
// const blue = document.getElementById("blue");
// const orange = document.getElementById("orange");
// const purple = document.getElementById("purple");

// const body = document.body;
// // document.querySelector("body");
// red.addEventListener('click',()=>{
//     body.style.backgroundColor = "red";
// });
// green.addEventListener('click',()=>{
//     body.style.backgroundColor = "green";
// });
// blue.addEventListener('click',()=>{
//     body.style.backgroundColor = "blue";
// });
// orange.addEventListener('click',()=>{
//     body.style.backgroundColor = "orange";
// });
// purple.addEventListener('click',()=>{
//     body.style.backgroundColor = "purple";
// });