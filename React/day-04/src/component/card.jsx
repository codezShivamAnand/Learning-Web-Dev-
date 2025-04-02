export default function Card( props){
    return(
        <div className="midd" style={{border:"2px solid black", padding: "8px",}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV3L_uxFDJzqMc4Fl2fUg-SCNoMef6b38MIQ&s" height="200px" width="200px" alt="Tshirt" />
            <div style={{textAlign: "center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
                <p className="price">{props.price}</p>
            </div>
        </div>
    )
}
