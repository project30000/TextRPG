import React, { component } from 'react';

const Button = props => (
<<<<<<< HEAD
    <button className="btn" onClick={props.handleFormSubmit}>{props.option}</button>
=======
    <button type="submit" onClick={()=>props.handleClick(props.nextText)} className="btn" nextText={props.nextText} >{props.option}</button>
>>>>>>> 3c05e456d10fc34bca57da741580679968dca416
)

export default Button