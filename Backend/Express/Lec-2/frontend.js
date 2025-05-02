//Default GET method : no data is sent to the server so the body and header is not required.
const response2 = await fetch('https://api.example.com/data');
const data = response2.json();

// POST METHOD : Data is sent from client (frontend ) to server 
const response1 = await fetch('https://api.example.com/data', {
    method : 'POST', // Necessary to mention 
    headers: {
        'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({name:'shiv', age: 30}) // data to be sent to the server 
});

// PATCH method : small modifications in the data 

const response3 = await fetch('https://api.example.com/data', {
    method : 'PATCH', // Necessary to mention 
    headers: {
        'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({ age: 30}) // MODIFIED data to be sent to the server 
});
