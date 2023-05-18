import React from "react";


const TextBox = (props) => {
    return (
        <input type="text" onChange={props.change}></input>
    )
};

export default TextBox;