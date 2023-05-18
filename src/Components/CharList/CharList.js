import React from "react";
import Char from "../Char/Char";

const CharList = (props) => {
    return (
        <div>
            {props.data.map((char, index) => { return <Char funcClick={props.func} key={index} text={char} /> })}
        </div>
    )
};

export default CharList;