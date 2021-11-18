import React from "react";

import classNames from "classnames";

const Button = ({className, circle, children, onClick}) => {
    return(
        <button onClick={onClick}
        className={
            classNames('btn', className, {'circle-btn': circle})
            }>
                {children}
            </button>
    );
}


export default Button;