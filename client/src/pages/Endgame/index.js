import React, { Component } from 'react';
import API from '../../utils/API';
import './style.css';
import Stats from '../../components/Stats';
import {withRouter} from "react-router";


class Endgame extends Component {
    state = {  
    }

    componentDidMount() {
        
        
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

export default withRouter(Endgame)