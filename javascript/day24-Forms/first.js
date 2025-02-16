const form = document.querySelector('form');

// form.addEventListener('input', (event)=>{
//     console.log(event.target);
//     console.log(event.target.value);
// })

// form.addEventListener('change', (event)=>{
//     console.log(event.target);
//     console.log(event.target.value);
// })

// form.addEventListener('focusin', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('focusout', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('dblclick', (event)=>{
//     // console.log(event.target.value);
//     console.log("double click")
// })

// form.addEventListener('reset', (event)=>{
//     // console.log(event.target.value);
//     console.log("form Reset");
// })

form.addEventListener('submit',(event)=>{

    event.preventDefault(); // prevents the page from refreshing automatically on submit 
   
    // const first = document.getElementById("first");
    // console.log(first.value);

    // const second = document.getElementById("second");
    // console.log(second.value);

    // const third = document.getElementById("third");
    // console.log(third.value);

    const data = new FormData(form); // form submit karne pe saare details formData se aa jata hai  
    // console.log(data); // formData obj ->dats is in key : values pair 
    // console.log(data.values()); // FormData Iterator {}
    
    // console.log(data.keys()); // FormData se keys ka access, Iterator {}
    // formdata iterator can be converted into arrays or can be iterated by for loop or for of loop 
    
    // console.log(Array.from(data.keys()));
    // console.log(Array.from(data.values()));

    // for of loop
    // for(let key of data.keys())
    //     console.log(key);

    // for(let key of data.values())
    //     console.log(key)

    // for(let key of data.entries()) // 2-d array in the form of name value pair
    //     console.log(key);
    
    for(let [key,value] of data.entries()) // destructring of array 
        console.log(key, value);
    

    // keys values



    // const result = document.getElementById('result');
    // result.innerText = `${first.value} ${second.value} is a good Boy`;

    // document.body.append(result);



})
