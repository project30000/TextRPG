import React, { Component } from 'react';
import API from '../../utils/API';
import axios from 'axios'
import './style.css';


class CharacterLog extends Component {
    
    constructor() {
        super()
        this.state = {
            loggedIn: false,
            username: null,
            userId: null,
            killCount: 0,
            character: "",
            characterId: null,
            userAverage: null,
            arrayCount: null,
        }
        this.handleChange = this.handleChange.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)

    }
    componentDidMount() {
        
        this.setState({
            username: this.props.username,
            userId: this.props.userId
        })
    }
    handlSubmit = () => {
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
                            <input className="form-input"          id="character" 
                                placeholder="i.e. Alozy the Barbarian" 
                                type="character"
                                name="character"
                                value={this.state.character} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-group ">
                        <div className="col-7"></div>
                        <button className="btn btn-primary col-1 col-mr-auto" onClick={this.handleSubmit}
                            type="submit">Create!</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CharacterLog