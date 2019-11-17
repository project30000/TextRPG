import React, { component } from 'react';


const Stats = props => (
    <div>
        <p className="yourScore">Your score: {props.data.killCount}</p>
        <p className="avgScore">User averages: {props.data.userAverage}</p>
    </div>

)

export default Stats