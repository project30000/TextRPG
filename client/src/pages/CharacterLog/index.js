import React, { Component } from 'react';
import API from '../../utils/API';
import axios from 'axios'
import './style.css';
import { withRouter } from "react-router";


class CharacterLog extends Component {
    
    constructor() {
        super()
        this.state= {
            loggedIn: true,
            character: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)

    }
    componentDidMount() {
    }
    handleSubmit = () => {
        console.log('handleSubmit')
        this.props.submitCharacter(this.state.character);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h4>Create a Character</h4>
                <form className="form-horizontal">
                    <div className="form-group">
                        <div className="col-1 col-ml-auto">
                            <label className="form-label" htmlFor="charName">Name</label>
                        </div>
                        <div className="col-3 col-mr-auto">
                            <input className="form-input"         
                                placeholder="i.e. Alozy the Barbarian" 
                                type="text"
                                name="character"
                                value={this.state.character} 
                                onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-group ">
                        <div className="col-7"></div>
                        <button className="btn btn-primary col-1 col-mr-auto" 
                            onClick={this.handleSubmit}
                            type="submit">Create!</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(CharacterLog)