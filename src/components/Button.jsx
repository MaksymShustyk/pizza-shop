import React from "react";

import classNames from "classnames";

const Button = ({className, circle, children}) => {
    return(
        <button
        className={
            classNames('btn', className, {'circle-btn': circle})
            }>
                {children}
            </button>
    );
}


export default Button;