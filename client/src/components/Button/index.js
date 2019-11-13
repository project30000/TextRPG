import React, { component } from 'react';

const Button = props => (
    <button className="btn" onClick={props.handleFormSubmit}>{props.option}</button>
)

export default Button