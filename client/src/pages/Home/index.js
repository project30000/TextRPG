import React, { Component } from 'react'
// import picture2 from '../../images/picture2'
import axios from 'axios'

class Home extends Component {
    
        constructor() {
            super()
            this.state = {
                username: '',
                password: '',
                redirectTo: null
            }
            this.handleSubmit = this.handleSubmit.bind(this)
            this.handleChange = this.handleChange.bind(this)
    
        }
    
        handleChange(event) {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    
        handleSubmit(event) {
            event.preventDefault()
            console.log('handleSubmit')
    
            axios
                .post('/user/login', {
                    username: this.state.username,
                    password: this.state.password
                })
                .then(response => {
                    console.log('login response: ')
                    console.log(response)
                    if (response.status === 200) {
                        // update App.js state
                        this.props.updateUser({
                            loggedIn: true,
                            username: response.data.username
                        })
                        // update the state to redirect to home
                        // this.setState({
                        //     redirectTo: '/'
                        // })
                    }
                }).catch(error => {
                    console.log('login error: ')
                    console.log(error);
    
                })
            }

    render() {
        const imageStyle = {
            width: 400
        }
        
        return (
            <div class="parallax">
                <div id="group1" class="parallax__group">
                    <div class="parallax__layer parallax__layer--base">
                    <img src="https://i.ibb.co/4Sqz9YW/pixel-art-things.png"></img>
                    </div>
                </div>
                <div id="group2" class="parallax__group">
                    <div class="parallax__layer parallax__layer--base">
                        <div class="title">Base Layer</div>
                    </div>
                    <div class="parallax__layer parallax__layer--back">
                  <img src="https://i.ibb.co/Nm3kJJM/picture1.png"></img>
                    </div>
                </div>
                <div id="group3" class="parallax__group">
                    <div class="parallax__layer parallax__layer--fore">
                        <div class="title">
                        <h4>Login</h4>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="username">Username</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password">Password: </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-7"></div>
                            <button
                                className="btn btn-primary col-1 col-mr-auto"

                                onClick={this.handleSubmit}
                                type="submit">Login</button>
                        </div>
                    </form>
                        </div>
                    </div>
                    <div class="parallax__layer parallax__layer--base">
                        <div class="title">Base Layer</div>
                    </div>
                </div>
                <div id="group4" class="parallax__group">
                    <div class="parallax__layer parallax__layer--base">
                        <div class="title">Base Layer</div>
                    </div>
                    <div class="parallax__layer parallax__layer--back">
                        <img src="https://i.ibb.co/Nm3kJJM/picture1.png"></img>
                    </div>
                    <div class="parallax__layer parallax__layer--deep">
                    <img src="https://i.ibb.co/Nm3kJJM/picture1.png"></img>

                    </div>
                </div>
                <div id="group5" class="parallax__group">
                    <div class="parallax__layer parallax__layer--fore">
                        <div class="title">Foreground Layer</div>
                    </div>
                    <div class="parallax__layer parallax__layer--base">
                        <div class="title">Base Layer</div>
                    </div>
                </div>
                <div id="group6" class="parallax__group">
                    <div class="parallax__layer parallax__layer--back">
                                              <img src="https://i.ibb.co/Nm3kJJM/picture1.png"></img>

                    </div>
                    <div class="parallax__layer parallax__layer--base">
                        <div class="title">Base Layer</div>
                    </div>
                </div>
                <div id="group7" class="parallax__group">
                    <div class="parallax__layer parallax__layer--base">
                        <div class="title">Base Layer</div>
                    </div>
                </div>
            </div>
             )

    }
}

export default Home
