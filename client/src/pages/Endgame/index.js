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
        const data02 =
            [
                { name: "Ending 1 (no violence)", value: this.props.data.array1 },
                { name: "Ending 2 (one violent incident)", value: this.props.data.array2 },
                { name: "Ending 3 (multiple violent incidents)", value: this.props.data.array3 }

            ]
       
        return (
            <div>
                <div>
                    <Link to="/characterlog" className="btn btn-link text-secondary">
                        <button className="btnShaken2">New Game</button>
                    </Link>
                </div>
                <br />
                <div><Stats data={this.props.data} /></div>
                <p>How your score compared to other users:</p>
                <p> {this.props.data.arrayCount}    </p>
                {/* <div className="cenPi">
                    
                    <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx={200} cy={200}
                        outerRadius={150} fill="#228B22"
                        label />
                        </PieChart>
                    <Tooltip />
                </div > */}
                <div className="cenPi">
                    <PieChart width={800} height={400} float="center" >
                        <Pie isAnimationActive={false} data={data02} cx={200} cy={200} outerRadius={150} fill="#228B22" color="black" label />

                        <Tooltip />
                    </PieChart>
                </div>
            </div >
        )
    }
}
export default withRouter(Endgame)