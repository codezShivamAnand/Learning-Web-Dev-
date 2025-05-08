function Colorful(){
    const [color, setColor] = useState("black");
        // we don't want to re-render the next line on every function call, except it should run only when a noticeable color change occurs -> useEffect HOok
        // document.body.style.backgroundColor = color;
        
    console.log("first");
    useEffect(()=>{ // executed at last 
        console.log("chala kya");
        document.body.style.backgroundColor = color;

    }, [color]); // if dependency is empty, it will only run for the initial render(when the page loads for the first time) and not on subsequent renders even if the color value is changed 

    console.log("second");
    return (
        <>
            <h1>Background Color Changer</h1>
            <div className="but">
                {/* button click pe UI me change hona chaiye so HOOKS can be used */}
                <button style={{backgroundColor: "red"}} onClick={()=>setColor("red")} >red</button>
                <button style={{backgroundColor: "orange"}} onClick={()=>setColor("orange")}>orange</button>
                <button style={{backgroundColor: "hotpink"}} onClick={()=>setColor("hotpink")}>hotpink</button>
                <button style={{backgroundColor: "blue"}} onClick={()=>setColor("blue")}>blue</button>
            </div>
        </>
    )
}