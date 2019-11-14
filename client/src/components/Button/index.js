import React, { component } from 'react';

const Button = props => (
    <button type="submit" onClick={()=>props.handleClick(props.nextText)} className="btn" nextText={props.nextText} >{props.option}</button>
)
export default Button