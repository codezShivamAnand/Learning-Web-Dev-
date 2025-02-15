const parent = document.getElementById("parents");
const child = document.getElementById("child");
const grandparent = document.getElementById("grandparents");

/// bubbling , capture is set false 
child.addEventListener('click', (event)=>{
    console.log("Child clicked");
    //console.log(event.target);
    // event.stopPropagation();
}, false);

// bubbling mein andr se bahar ki taraf just like a bubble

parent.addEventListener('click', (event)=>{
    console.log("parent clicked");
    // console.log(event.target);
    // console.log(event.currentTarget);
    event.stopPropagation();

}, false);

grandparent.addEventListener('click', (event)=>{
    console.log("grandparent clicked");
    //console.log(event.target);
    //console.log(event.currentTarget);
}, false);

// addEventListener(first_event, cancelIdleCallback, capture)


// Capture
// child.addEventListener('click', ()=>{
//     console.log("Child clicked");
// }, true);

// // bubbling mein andr se bahar ki taraf just like a bubble
// parent.addEventListener('click', ()=>{
//     console.log("parent clicked");
// }, true);

// grandparent.addEventListener('click', ()=>{
//     console.log("grandparent clicked");
// }, true);

// variation 
// child.addEventListener('click', (event)=>{ // capture
//     console.log("Child clicked");
// }, true);

// parent.addEventListener('click', (event)=>{ // bubble
//     console.log("parent clicked");

// }, false);

// grandparent.addEventListener('click', (event)=>{ // capture 
//     console.log("grandparent clicked");

// }, true);

