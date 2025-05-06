import {Outlet, Link} from "react-router";
export default function Dashboard(){
    return (
        <>
        <nav>
            {/* <Link to="/Dashboard">Dashbaord</Link> */}
            {/* <Link to="Buy">Buy</Link>  // this is index element so alr displyaed using outlet*/}
            <Link to="Sell">Sell</Link>
            <Link to="Rental">Rental</Link>
        </nav>
            <h1>This is Dashboard page</h1>
            <Outlet></Outlet>
        </>
    )
}