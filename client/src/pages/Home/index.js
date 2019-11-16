import React, { Component } from 'react'
import axios from 'axios'


class Home extends Component {
    
        constructor() {
            super()
            this.state = {
                username: '',
                password: '',
                confirmPassword: '',
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
            console.log('sign-up handleSubmit, username: ')
            console.log(this.state.username)

            axios .post('/user/login', {
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
                        if (!response.data.errmsg) {
                            console.log('successful signup')
                            this.setState({ //redirect to login page
                                redirectTo: '/login'
                            })
                        } else {
                            console.log('username already taken')
                        }
                        // update the state to redirect to home
                        // this.setState({
                        //     redirectTo: '/'
                        // })
                    }
                }).catch(error => {
                    console.log('login error: ')
                    console.log('signup error: ')
                    console.log(error);
    
                })
            }

    render() {
        const imageStyle = {
        }
        return (
            <div>
                <div>
            <audio ref="audio_tag" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" controls autoPlay/>
 </div>
            <div class="parallax">
                <div id="group1" class="parallax__group">
                    <div class="parallax__layer parallax__layer--base">
                    {/* <img src="https://i.ibb.co/ck8GYj4/renderbuilding1.png"></img> */}
                    {/* <img src="https://i.ibb.co/Nm3kJJM/picture1.png"></img> */}
                    <img src="https://i.ibb.co/XxYV7pB/picturebackground2.jpg"></img>                
                     </div>
                </div>
                <div id="group2" class="parallax__group">
                    <div class="parallax__layer parallax__layer--base">
                        <div class="title">
                        <h4>Sign up</h4>
				<form className="form-horizontal">
					<div className="form-group">
						<div className="auto">
							<label className="form-label" htmlFor="username">Username</label>
						</div>
						<div className="auto">
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
						<div className="auto">
							<label className="form-label" htmlFor="password">Password: </label>
						</div>
						<div className="auto">
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
							className="btn btn-primary auto"
							onClick={this.handleSubmit}
							type="submit"
						>Sign up</button>
					</div>
				</form>
                        </div>
                    </div>
                    <div class="parallax__layer parallax__layer--back">
                    </div>
                </div>
                <div id="group3" class="parallax__group">
                    <div class="parallax__layer parallax__layer--fore">
                        <div class="title">
                        <h4>Login</h4>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="auto">
                                <label className="form-label" htmlFor="username">Username: </label>
                            </div>
                            <div className="auto">
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
                            <div className="auto">
                                <label className="form-label" htmlFor="password">Password: </label>
                            </div>
                            <div className="auto">
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
                                className="btn btn-primary"

                                onClick={this.handleSubmit}
                                type="submit">Login</button>
                        </div>
                    </form>   
                        </div>
                    </div>
                    <div class="parallax__layer parallax__layer--base">
                        <div class="title"></div>
                    </div>
                </div>
                <div id="group4" class="parallax__group">
                    <div class="parallax__layer parallax__layer--base">
                                    </div>
                    <div class="parallax__layer parallax__layer--back">
                        {/* <img src="https://i.ibb.co/VJC7wsf/renderbuilding1.png" ></img> */}
                       <br>
                       </br>

                        <h1>Wake up.....</h1>
                        <hr></hr>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div class="parallax__layer parallax__layer--deep">
                    </div>
                </div>
                <div id="group5" class="parallax__group">
                    <div class="parallax__layer parallax__layer--fore">

                    </div>
                    <div class="parallax__layer parallax__layer--base">
                        <div class="title">
                        <img src="https://i.ibb.co/52n5DP9/background-image-3.jpg"></img>

                        </div>
                    </div>
                </div>
                <div id="group6" class="parallax__group">
                    <div class="parallax__layer parallax__layer--back">
                    <img src="https://i.ibb.co/Nm3kJJM/picture1.png"></img>

                    </div>
                    <div class="parallax__layer parallax__layer--base">
                    {/* <img src="https://i.ibb.co/nzw417m/Untitled-333.png"></img>  */}
                        <div class="title"></div>
                    </div>
                </div>
                <div id="group7" class="parallax__group">
                    <div class="parallax__layer parallax__layer--base">
                        <div class="title">Footer</div>
                    </div>
                </div>
            </div>
            </div>
             )

    }
}

export default Home
