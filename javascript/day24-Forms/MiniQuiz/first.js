const answerArr =["Sachin Tendulkar", "Virat Kohli", "India", "West Indies", "264"];
const form = document.querySelector('form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    
    // console.log(data.values());
    // q1=Sundar+Pichai&q2=Brian+Lara&q3=New+Zealand&q4=West+Indies&q5=264

    // for(let [key,values] of data.entries()){
    //     console.log(key, values);
        
    //     // q1 Sachin Tendulkar
    //     // q2 Virat Kohli
    //     // q3 India
    //     // q4 West Indies
    //     // q5 264
    // }
    const data = new FormData(form);
    let result = 0;
    const currentAns = Array.from(data.values());
    for(let i = 0; i < currentAns.length; i++){
        if(answerArr[i] === currentAns[i])
            result++;
    }
    const dispResult = document.getElementById('result');
    dispResult.textContent = `${result} out of 5 correct`;
    //------------------PROBLEM ----------------------
    // // HOW TO SET THE RESET BUTTON TO FXN 
    // const resetbtn = document.getElementById('reset');
    // resetbtn.addEventListener('click',(event)=>{
    //     console.log(event.target);
    //     // form.reset();
    //     // dispResult.textContent = '';
    // });
});