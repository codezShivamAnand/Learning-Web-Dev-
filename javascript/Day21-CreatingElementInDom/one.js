// <!-- Create Node -->
// -----------------------------1: Create a Element : createElement('elementName')

// create : <li>TS</li>
    
// const element = document.createElement('li');
// element.innerHTML = "TS";
// console.log(element);
/*
function attach(content){
    const element = document.createElement('li');
    element.innerHTML = content;
    // console.log(element);

    const element2 = document.createElement('li');
    element2.innerHTML = content + "v2.0";
    
    // ------------- Add node to DOM-------
    const parent = document.getElementById("root");
    // parent.appendChild(element); // ek baar me ek hi element 
    // console.log(parent);
    // parent.append(element,element2, "Hello Shivam"); // multiple elements ko daal skte hai and it will attach at the last 
};
attach("TS");
// attach("React");
*/
// -------------------2: Create a Text Node : createTextNode("Hello CoderArmy")---------------------------------------------
//  (node with no tag attached ex: text, new line etc)+
    // const element = document.createTextNode(" Hello CoderArmy");
    // const parent = document.getElementById("root");
//append
    // parent.append(element);

// ---------------3: Create a Attribute Node : createAttribute("id") --------------------------------

// Create a new class attribute
  const attr = document.createAttribute("class");
  attr.value = "first"; // class="first"

// kiske saaath attach karna hai uska access lena hoga using querySelector 
// select the element 
const curr_li = document.querySelector('li');
// curr_li.setAttributeNode(attr);

// how to get access to the second li
// Access to second list , first get the access to the parent element 
// const parent = document.getElementById("root"); // Get the parent element
// console.log(parent.children); // returns htmlCollection , now we can get to whatevr children by parent.children[i]
// Apply it to the second child (index 1)
  // parent.children[1].setAttributeNode(attr); 


// ------if you want to set the class to all the child of the parent ie., to all list elements , then loop through and set 
    // const curr_li1 = document.querySelectorAll('li');
    // curr_li1.forEach(val=>{
    //     val.setAttribute("class",  "first");
    // });

// ==================Access attribute of an element 
// const element = document.getElementById("root");
// console.log(element.getAttribute("id"));
// console.log(element.getAttribute("class")); 
// //====setting attribute custom/update 
// console.log(element.setAttribute("custom", "20"));
// //======remove attribute
// element.removeAttribute("custom");


// ADD NODE -----------------------------
/*
//1. Parent Access: array
const parent = document.getElementById("root");
//2. Create Element : data
const element = document.createElement('li');
element.innerHTML = "TS";
//3. parent ke andr prepend kar do element ko 
//parent.prepend(element); // element positioned at first 
parent.append(element); // element positioned at last 

// position specific to an element of list like "TS" ko Html se phle dalo 
const child2 = parent.children[1];
// parent.insertBefore(element,child2);// (newnode, reference Node)

//----- REPLACE CHIDL 
 // parent.replaceChild(element, child2);
*/

//------------Using innerHtml :Directly sets the HTML content of an element 
/*
const parent = document.getElementById("root");
// parent.innerHTML += "<li>TS</li>";

//---------element ko kahi bhi dalna ho----------- using insertAdjacentHTML() or insertAdjacentElement();
// ul se phle koi aur element dalna ho 
const element = document.createElement("div");
element.innerHTML ="Hello Shivam Anand";

// parent.insertAdjacentElement("beforebegin", element); // beforebegin, afterbegin, beforeend, afterend
// parent.insertAdjacentElement("afterend", element)
// parent.insertAdjacentElement("afterbegin", element)
*/

//---------------------deleting node/element
const element = document.querySelectorAll('li');
element[2].remove();

// removeChild(Node); 
const parent = document.getElementById("root");
const child = document.querySelectorAll('li');

// parent.removeChild(child[1]);
