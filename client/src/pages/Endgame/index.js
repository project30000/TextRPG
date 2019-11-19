import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './style.css';
import Stats from '../../components/Stats';
import {
    PieChart, Pie, Legend, Tooltip,
} from 'recharts';
import { Link } from 'react-router-dom'






class Endgame extends Component {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';

    constructor() {
        super()
        this.state = {
        }
        this.handleRestart = this.handleRestart.bind(this);

    }
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';

    componentDidMount() {

    }

    handleRestart() {
        this.props.history.push('/characterlog')
    }


    render() {
        // console.log("render array")
        // console.log(this.props.data.arrayCount)
        const data01 =
            [this.props.data.arrayCount];
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