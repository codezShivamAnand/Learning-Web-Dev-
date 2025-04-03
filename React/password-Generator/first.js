import React,{useState, useEffect} from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator(){

    const [password, setPassword] = useState("SNAFJVER");
    const [length, setLength] = useState(10);
    const [numberticked, setnumberticked] = useState(false);
    const [charticked, setcharticked] = useState(false);

    function generatePassword(){
        let str="abcdefghijklmnopqrstuvwxyz"

        if(numberticked){
            str +="1234567890";
        }
        if(charticked){
            str +="#$@*!"
        }

        let pass = "";
        for(let i = 0; i < length; i++){
            pass += str[Math.floor(Math.random()*str.length)];
        }
        setPassword(pass);
    }

    useEffect(()=>{ // save function from infinite calling 
        generatePassword();
    }, [length,numberticked,charticked]) // function is called when either  of length, numberticked, charticked is changed, so these are passed as depenedencies 

    return(
        <>
            <h1>{password}</h1>
            <div>
                <input type="range" min={10} max={25} value={length} onChange= {(e)=>setLength(e.target.value)}></input>
                <label>Length {length}</label>

                <input type="checkbox" defaultChecked={numberticked} onChange={()=>setnumberticked(!numberticked)} ></input>
                <label>Number</label>

                <input type="checkbox" defaultChecked={charticked} onChange={()=>setcharticked(!charticked)}></input>
                <label>Character</label>
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);