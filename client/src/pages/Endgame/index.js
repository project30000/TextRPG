import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './style.css';
import Stats from '../../components/Stats';
import {
    PieChart, Pie, Legend, Tooltip,
} from 'recharts';
import { Link } from 'react-router-dom'


const data01 =
    // [this.props.data.arrayCount];
    [
        { name: 'Group A', value: 200 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
    ];




class Endgame extends Component {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';
    constuctor() {
        this.onClick = this.handleRestart.bind(this);
        //I tried switching these around and making them equal, but it still says can't read prop on line 33
    }

    state = {
    }

    handleRestart() {
        this.props.history.push('/game')

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
                <div>
                    <Link to="/game" className="btn btn-link text-secondary">
                        <button className="btnShaken">New Game</button>
                    </Link>
                </div>
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
                        label /></PieChart>
                    <Tooltip />
                </div >
            </div >
        )
    }
}

export default withRouter(Endgame)