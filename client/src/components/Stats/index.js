import React, { component } from 'react';

const endings = [
    // "You handled this nonviolently! Congrats. Some would call you Ghandi. Too bad you are stuck in the room.", "You almost got it, but you didn't attack enough times. Nice try.", "Violence is always the answer! Congrats on escaping."
    " passive stuck",  
    " aggresive stuck", 
    "paradox escape",
    "unplug escape" ,
]

const Stats = props => (
    <div>
        {/* <p className="yourScore">Your score: {props.data.killCount} </p> */}
        <p> {endings[props.data.killCount]} </p>
        {/* <p className="avgScore">User averages: {props.data.userAverage}</p> */}
    </div>

)

export default Stats