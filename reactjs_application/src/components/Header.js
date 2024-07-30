import React from "react";

function Header({name,title})
{
    return(
        <div style={{background:"yellow", padding:20, width:400}}>
            <h1>{title}</h1>
            <h2>{name}</h2>
            <p>this is Header component for learning purpose</p>
        </div>
    )
}
export default Header;