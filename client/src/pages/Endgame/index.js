import React, { Component } from 'react';
import './style.css';
import Stats from '../../components/Stats';
import {withRouter} from "react-router";
import {
    PieChart, Pie, Legend, Tooltip,
} from 'recharts';

class Endgame extends Component {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';

    state = {
    }

    componentDidMount() {
        this.props.finishGame(this.props.data.userID, this.props.data.killCount)

    }

    render() {
        const data01 =
            // [this.props.data.arrayCount];
            [
                { name: 'Ending 1', value: 5 },
                { name: 'Ending 2', value: 8 },
                { name: 'Ending 3', value: 10 },
                { name: 'Ending 4', value: 9 },
                { name: 'Ending 5', value: 3 },
                { name: 'Ending 6', value: 1 },
            ];

        return (
            <div>
                <br />
                <div><Stats data={this.props.data} /></div>
                <p>How your score compared to other users:</p>
                <div className="cenPi"><PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx={200} cy={200}
                        outerRadius={150} fill="#228B22"
                        label />
                    {/* <Pie 
                    dataKey="value" 
                    data={data02} 
                    cx={500} cy={200} 
                    innerRadius={40} 
                    outerRadius={80} 
                    fill="#82ca9d" /> */}
                    <Tooltip />
                </PieChart></div>
            </div >
        )
    }
}

export default withRouter(Endgame)