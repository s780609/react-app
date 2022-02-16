import React from "react";

const Button = (props) => {
    return <button style={{ width: "100px", height: "50px" }}>
        {props.children}
    </button>
};

export default Button;