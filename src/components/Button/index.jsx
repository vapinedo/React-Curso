import React from 'react'
import PropTypes from 'prop-types';
import './Button.css'

const Button = ({type, text, clickHandler}) => (
    // type = button-long-text
    <button className={type} onClick={() => clickHandler(text)}>
        <span>{text}</span>
    </button>
)

Button.propTypes = {
    type: PropTypes.string, 
    text: PropTypes.string.isRequired, 
    clickHandler: PropTypes.func.isRequired
}

export default Button