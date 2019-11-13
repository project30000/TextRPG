import React, { component } from 'react';

const Button = props => (
    <button className="btn" id={props.id} onClick={()=>props.handleClick()}>{props.option}</button>
)
export default Button