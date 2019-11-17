import React, { Component } from 'react';
import './style.css';
import Stats from '../../components/Stats';
import {
    PieChart, Pie, Legend, Tooltip,
} from 'recharts';

const data01 =
    // [this.props.data.arrayCount];
    [
        { name: 'Group A', value: 200}, 
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 }, 
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 }, 
        { name: 'Group F', value: 189 },
    ];


class Endgame extends Component {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';

    state = {
    }

    componentDidMount() {
        this.props.finishGame(this.props.data.userID, this.props.data.killCount)

    }

    render() {

        return (
            <div>
                <br />
                <div><Stats data={this.props.data} /></div>
                {console.log("Look here: " + this.props.data.arrayCount)}
                <br />
                <p>How your score compared to other users:</p>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx={200} cy={200}
                        outerRadius={80} fill="#228B22"
                        label />
                    {/* <Pie 
                    dataKey="value" 
                    data={data02} 
                    cx={500} cy={200} 
                    innerRadius={40} 
                    outerRadius={80} 
                    fill="#82ca9d" /> */}
                    <Tooltip />
                </PieChart>
            </div >
        )
    }
}

export default Endgame