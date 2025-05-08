import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import './styles.css';

function App(){
    const [password,setPassword] = useState("");

    // for length of the password 
    const [length, setLength] = useState("5");

    // for the number/char Include or not 
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [charInclude, setCharInclude] = useState(false);

    function generatePassword(){
        let str="abcdevfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(includeNumbers)
            str+="0123456789";
        if(charInclude)
            str+="@%$&*!)>(";

        let pass= " ";

        for(let i = 0; i < length; i++){
             pass += str[Math.floor(Math.random()*str.length)];
        }

        setPassword(pass);
    }

        // generatePassword(); this will create an infinite funciton loop, try to run the code on ur own to find out 

    useEffect(()=>{
        generatePassword();
    },[length, includeNumbers, charInclude ])

    return (
        <div className="container">
            <h1>{password}</h1>
            <div id="input-length">
                <input type="range" min="length" max="12" value={length} onChange={(e)=>setLength(Number(e.target.value))} />
                <label id="len">Length ({length})</label>
                
                <input type="checkbox" id="includeNumbers"  defaultChecked={includeNumbers} onChange={()=> setIncludeNumbers(!includeNumbers)} />
                <label htmlFor="includeNumbers" >Numbers</label>

                <input type="checkbox" id="charInclude"  defaultChecked={charInclude} onChange={()=> setCharInclude(!charInclude)} />
                <label htmlFor="charInclude" >Characters</label>
            </div>


        </div>
    )
}
const ReactRoot = ReactDOM.createRoot(document.getElementById('root'));
ReactRoot.render(<App/>);