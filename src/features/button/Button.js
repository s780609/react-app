import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { textChange } from "./buttonSlice";

const TEXT = {
    WORLD: "hello world",
    TAIWAN: "hello taiwan",
}

const Button = (props) => {
    const text = useSelector((state) => state.button.text);
    const dispatch = useDispatch();

    function handleClick(e) {
        const text = e.target.innerText || e.target.textContent;
        dispatch(textChange(text));

        // if (text == TEXT.TAIWAN) {
        //     setText(TEXT.WORLD)
        // }
        // else if (text == TEXT.WORLD) {
        //     setText(TEXT.TAIWAN)
        // }
        // else {
        //     setText(TEXT.WORLD)
        // }
    }

    return <button id="button" data-testid="button" style={{ width: "100px", height: "50px" }}
        onClick={props.handleClick ? props.handleClick : handleClick}>
        {text}
    </button>
};

export default Button;