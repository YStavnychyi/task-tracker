import React from 'react';
import PropTypes from "prop-types";

const Button = ({color, text, onClick}) => {
    return (
        <button style={{backgroundColor: color}}
                onClick={onClick}
                className="btn-Add">
            {text}
        </button>);
};

Button.defaultProps = {
    color: 'steelblue'
}

Button.propsTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;