import React, { Component } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
// components
import Signup from './pages/sign-up'
import LoginForm from './pages/login-form'
import Navbar from './pages/navbar'
import Game from './pages/Game'
import Home from './pages/Home'
<<<<<<< HEAD
=======

>>>>>>> master

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log(response.data.user);
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          userId: response.data.user.id
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  // on submit --> initializing game 
  submitCharacter() {
    //state is current user's username 
    this.setState({
      loggedIn: true,
      username: this.state.username,
      userId: this.state.userId,
      killCount: 0,
      character: "test", // from forum 
    })

    //first post to database, attaching the logged-in account/state username with it 
    axios.post('/characters/' + this.state.userId + "/" + this.state.character, {
      name: "test", //grab value from form // ,
    })

    var characterDataId;
    axios.get('/characters/' + this.state.userId + "/" + this.state.character).then(response => {
      characterDataId = response.data._id
    })

    // update state to include a killcount of zero 
    this.setState({
      loggedIn: true,
      username: this.state.username,
      userId: this.state.userId,
      killCount: 0,
      character: "test", // from forum 
      characterId: characterDataId,
    })

  }

  //incrementing deathKill
  incrementDeath() {
    //just add one to killcount
    this.setState({
      loggedIn: true,
      username: this.state.username,
      userId: this.state.userId,
      killCount: this.state.killCount + 1,
      character: this.state.character,
      characterId: this.state.characterId,
    })

  }

  //posting deathcount into scores
  postingDeathCount() {
    var killCount = this.state.killCount
    var id = this.state.userId
    
    axios.put('characters/'+ id + "/" + this.state.character + "/" + killCount)

  }




  render() {
    return (
      <div className="App">

        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p>Join the party, {this.state.username}!</p>
        }
        {/* Routes to different components */}
        <Route
          exact path="/"
          component={Home} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup />}
        />
        <Route
          path="/game"
          render={() =>
            <Game />}
        />
        </div>
      );
    }
  }




  export default App;