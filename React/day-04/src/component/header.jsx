function Header(){
    return (
        <div className="heading" >

            <img src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png" height="90px" width="70px" />
            <div className="options">
                <button>MEN</button>
                <button>WOMEN</button>
                <button>KIDS</button>
                <button>HOME & LIVING</button>
                <button>BEAUTY</button>
                <button>STUDIO<sup>NEW</sup></button>

            </div>
            <input className="searchbox" placeholder="Search for products brands and more" />
            <div className="account">
                <button>profile</button>
                <button>wishlist</button>
                <button>bag</button>
            </div>

        </div>
    )
}

export default Header;