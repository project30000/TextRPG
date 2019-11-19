import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './style.css';
import Stats from '../../components/Stats';
import {
    PieChart, Pie, Legend, Tooltip,
} from 'recharts';





class Endgame extends Component {
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
        console.log("render array")
        console.log(this.props.data.arrayCount)
       
        const data01 =
            [
                // { name: "Ending 1", value: this.props.data.arrayCount[1] },
                // { name: "Ending 2", value: this.props.data.arrayCount[1] },
                // { name: "Ending 3", value: this.props.data.arrayCount[2] }
            ]
        return (
            <div>
                <br></br>
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
                </PieChart>
                </div>
                <br />
                <div>
                    <button
                        onClick={this.handleRestart}
                        className="btn">
                        New Game
                    </button>
                </div>

            </div >
        )
    }
}
export default withRouter(Endgame)