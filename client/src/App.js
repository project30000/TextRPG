import React, { Component } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
// components
import Signup from './pages/sign-up'
import LoginForm from './pages/login-form'
import Navbar from './pages/navbar'
import Game from './pages/Game'
import Home from './pages/Home'
import { parse } from 'path';
import Stats from './components/Stats';
import Endgame from './pages/Endgame';
import { withRouter } from 'react-router'
import { Domain } from 'domain';
import CharacterLog from './pages/CharacterLog';

class App extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     loggedIn: true,
  //     username: "poop",
  //     userId: "5dca461355fad0bd7116f38a",
  //     killCount: 0,
  //     character: "weenie", // from forum 
  //     characterId: "5dcca7d49f58d5eace050256"
  //   }
  // }
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      userId: null,
      userAverage: null,
      arrayCount: null,
      killCount: 0,
      character: null,
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.finishGame = this.finishGame.bind(this)
  }


  componentDidMount() {
    this.getUser()

  }


  updateUser = (userObject) => {
    this.setState(userObject)
  }


  getUser = () => {
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
  submitCharacter = (character) => {
    this.setState({
      character: character,

    })
    axios.post('/characters/' + character, {
      name: character //grab value from form // ,
    })
    this.props.history.push('/game')

  }

  //incrementing deathKill
  incrementDeath = (killCount) => {
    killCount += 1
    //just add one to killcount
    this.setState({
      killCount: killCount,
    })
  }

  // //posting deathcount into scores
  // postingDeathCount=(killCount)=>{

  //   axios.put('characters/' + this.state.character + "/" + killCount)
  // }



  finishGame = (killCount) => {
    // display killcount (this.state.killCount)
    this.setState({
      killCount: killCount
    })
    axios.put('characters/' + this.state.character + "/" + killCount)

    // display users average killcount
    var userAverage = 0
    axios.get('userscore/').then(response => {
      for (var i = 0; i < response.data.length; i++) {
        var kc = parseInt(response.data[i].killCount)
        userAverage = userAverage + kc;
      }
      userAverage = userAverage / response.data.length
      this.setState({
        userAverage: userAverage
      })

    })

    //number of people per ending

    var zeroNumber = 0;
    var oneNumber = 0;
    var twoNumber = 0;
    var threeNumber = 0;
    axios.get('characters').then(response => {
      for (var i = 0; i < response.data.length; i++) {
        var kc = parseInt(response.data[i].killCount)
        if (kc === 0) {
          zeroNumber++
        } else if (kc === 1) {
          oneNumber++
        } else if (kc === 2) {
          twoNumber++
        } else if (kc === 3) {
          threeNumber++
        }
      }
      var arrayCount = [zeroNumber, oneNumber, twoNumber, threeNumber]
      this.setState({
        array1: arrayCount[0],
        array2: arrayCount[1],
        array3: arrayCount[2],
        array4: arrayCount[3],
      })
      this.props.history.push('/endgame')

    })


  }





  render() {
    return (
      <div className="App">

        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn}

        {/* /* Routes to different components */}
        <Route
          exact path="/"
          component={Home}
        />


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
            <Signup
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/game"
          render={() =>
            <Game
              incrementDeath={this.incrementDeath}
              finishGame={this.finishGame}
              data={this.state}
            />}
        />

        <Route
          path="/endgame"
          render={() =>
            <Endgame
              data={this.state}
            />
          }
        />

        <Route
          path="/characterlog"
          render={() =>
            <CharacterLog
              submitCharacter={this.submitCharacter}
              data={this.state}
            />
          }
        />

      </div>

    );
  }
}




export default withRouter(App);
