import React from "react";

function Functionprops(props){
    return(
    <div>
        <h3>This is Functional Component</h3>,
        <h3>Hello!! {props.name} from {props.place}, This is Functional props topic</h3>
    </div>
    );
}

export default Functionprops;