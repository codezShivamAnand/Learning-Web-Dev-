// c: Accessing by CSS Selectors:------------------------------------------------

// i.Single Element : querySelector('.class/#id/tagName'):returns the first element that matches a specified CSS selector(s) in the document

        // ------example1------------------------------------
const id = document.querySelector('#first'); // class, id , tag
// id.innerText = "Hello Shivam,How ur  "; // innerText v/s innerHTML v/s textContent
// console.log(id);
        // ------example2------------------------------------
const id2 = document.querySelector('.header1');
// console.log(id2);
// id2.style.backgroundColor="hotpink";
// id2.style.border="2px blue dashed";

// ii. Multiple Elements--------------------------------------------------------------------------

// querySelectorAll : returns NodeList which is an array like object but not exactly an array
const id3= document.querySelectorAll('.header1');
// console.log(id3); // NodeList

//how can we iterate over the NodeList
//1. for loop
    // for(let i=0;i<id3.length;i++){
    //     console.log(id3[i]);
    // }
//2. forof
    // for(let items of id3){
    //     console.log(items);
    // }
//3. forEach works on NodeList
    // id3.forEach((item)=>{
    //     console.log(item);
    // })

// converting id3 to array
//const id4 = Array.from(id3);
// now we can do any operation of array on id4

let id5 = document.querySelectorAll('li');//tag
//console.log(id5);// gives a nodelist of all the li elements

let id5a = document.querySelector('li');
// console.log(id5a);// gives the first li element

let id5ab = document.querySelector('ul li'); // or ('ui>li)
//console.log(id5ab);// gives the first children of ul

let id5ac = document.querySelectorAll('ul li');// ('ui>li')
// console.log(id5ac);// gives nodelist of all the children of ul


/* Note: Which Methods Return HTMLCollection?------------------------------------------------------------
document.getElementsByClassName("header1"); // Returns HTMLCollection
document.getElementsByTagName("div"); // Returns HTMLCollection
document.forms; // Returns HTMLCollection
document.images; // Returns HTMLCollection
document.links; // Returns HTMLCollection 

HTMLCollection is not iterable with forEach().So first convert it to an array using Array.from() method.
*/

/* d: Accessing by Tag Name--------------------------------------------------------------------------*/

const obj3 = document.getElementsByTagName('h1'); // gives HTMLCollection:
// console.log(obj3);

// looping methods : 
// 1. for loop
/*
for(let i =0; i < obj3.length;i++)
    Object.assign(obj3[i].style, {
        backgroundColor:"white",
        border: "2px black solid",
        padding: "10px",
        color:"black"
    });
*/

// 2. for of loop 
// for(let val of obj3)
//     console.log(val);

// 3.forEach();
    // Array.from(obj3).forEach(val)=>{
    //     val.style.backgroundColor = "pink";
    // }


/* e: Accessing Using Relationships------------------------------------------------------------------*/

// i.parent node.
// Method: element.parentNode or element.parentElement
            // first select the element jiska parent element search karna hai,
    const list= document.querySelector('li');
    // console.log(list.parentNode);
    // console.log(list.parentElement);

// ii: Child Nodes: 
//Method: element.childNodes (includes text nodes too i.e, Nodelist) or element.children (only element nodes i.e, HTMLCollection)
   
    const par= document.querySelector('ul');
    // console.log(par);
    // console.log(par.childNodes);// NodeList(9) [text, li, text, li, text, li, text, li, text]
// NodeListNodes returns textNode as well as html element, these text are empty spaces/gaps/texts/comments between two html elements 
    // console.log(par.children);// returns HTMLCollection

// iii: First and Last Child:
//Methods: element.firstChild, element.lastChild, element.firstElementChild, element.lastElementChild
   /*
    console.log(par.firstChild);
    console.log(par.firstElementChild);
    console.log(par.lastChild);
    console.log(par.lastElementChild);
    */
// iV: Sibling Nodes:
// Methods: element.nextSibling, element.previousSibling, element.nextElementSibling, element.previousElementSibling
    /*
    console.log(par.previousSibling);
    console.log(par.previousElementSibling);
    console.log(par.nextSibling);
    console.log(par.nextElementSibling);
    */

// INNER HTML v/s innerText v/s textContent
   // console.log( document.getElementById('first').innerHTML);// as it is show 
   //  console.log(document.getElementById('first').innerText); // webpage pe jo show hota hai sirf usko return karta hai 
   //  console.log(document.getElementById('first').textContent); // displays hidden text too (disply : none wala bhi show kar deta hai )



    let div = document.getElementById("demo");
  
    // console.log(div.innerText);  // Output: Hello World!  
    // div.innerText = "Updated Text";  // Only updates text
    // console.log(div.innerText); // Updated Text

// ii. innerHTML : Retrieves or sets HTML CONTENT inside an element.
    // console.log(div.innerHTML);  // Output: Hello <span style="display: none;">Hidden</span> World!
    // div.innerHTML = "<h2>New Content</h2>";  // Inserts new HTML
    // console.log(div.innerHTML);// <h2>New Content</h2>

// iii. textContent
    // console.log(div.textContent);  // Output: Hello Hidden World!
    // div.textContent = "Updated Text";  // Only updates text
    // console.log(div.textContent);


