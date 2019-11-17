import React, { component } from 'react';


const Stats = props => (
    <div>
        <p className="yourScore">{props.data.killCount}</p>
        <p className="avgScore">{props.data.userAverage}</p>
        <div className="graph">{props.data.arrayCount}</div>
    </div>

)

export default Stats