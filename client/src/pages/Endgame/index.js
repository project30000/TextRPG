import React, { Component } from 'react';
import API from '../../utils/API';
import './style.css';
import Stats from '../../components/Stats';


class Endgame extends Component {
    state = {  
    }

    componentDidMount() {
        this.props.finishGame(this.props.data.userID, this.props.data.killCount)
        
    }

    render() {
        return (
            <div>
                <br />
                <Stats 
                    data={this.props.data}

                />
                <br />
            </div >
        )
    }
}

export default Endgame