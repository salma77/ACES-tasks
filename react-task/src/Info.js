import React from "react";

function Info(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}
export default Info;