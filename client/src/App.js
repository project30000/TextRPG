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
      killCount: 0,
      character: null,
      characterId: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }


  componentDidMount() {
    this.getUser()
  }

  updateUser=(userObject)=>{
    this.setState(userObject)
  }

  getUser=()=>{
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
  submitCharacter=()=>{
    //state is current user's username 
    this.setState({
      killCount: 0,
      character: "", // from forum 
    })

    //first post to database, attaching the logged-in account/state username with it 
    axios.post('/characters/' + this.state.userId + "/" + this.state.character, {
      name: this.state.character //grab value from form // ,
    }).then(
      data => {
        var characterDataId;
        axios.get('/characters/' + this.state.userId + "/" + this.state.character).then(response => {
          characterDataId = response.data._id
          this.setState({
            characterId: characterDataId,
          })
        })

      })

  }

  //incrementing deathKill
  incrementDeath=(killCount)=> {
    killCount +=1
    //just add one to killcount
    this.setState({
      killCount: killCount,
    })
  }

  //posting deathcount into scores
  postingDeathCount=(id, killCount)=>{
    axios.put('characters/'+ id + "/" + this.state.character + "/" + killCount)
  }



  finishGame=(userId, killCount)=>{  
    this.postingDeathCount(userId, killCount)
    // display killcount (this.state.killCount)
    console.log("CURRENT DEATH COUNT: " + killCount)

    // display users average killcount
    var userAverage = 0
    console.log("finishGame is hit")
    axios.get('users/' + userId).then(response => {
      for (var i = 0; i < response.data.length ; i++) {
        var kc = parseInt(response.data[i].killCount)
        console.log(kc)
        userAverage = userAverage + kc;
      }
      userAverage = userAverage/response.data.length
      console.log("YOUR AVERAGE DEATH COUNT: " + userAverage)

    })
   
    

  //number of people per ending
  
   var zeroNumber = 0;
   var oneNumber = 0;
   var twoNumber = 0;
   var threeNumber = 0;
   var fourNumber = 0;
   var fiveNumber =0;
    axios.get('characters').then(response => {
      for (var i = 0; i < response.data.length ; i++) {
        var kc = parseInt(response.data[i].killCount)
        if (kc = 0) {
          zeroNumber++
        } else if (kc = 1) {
          oneNumber++
        } else if (kc = 2) {
          twoNumber++
        } else if (kc = 3) {
          threeNumber++
        } else if (kc = 4) {
          fourNumber++
        } else if (kc = 5) {
          fiveNumber++
        }
      }
      var arrayCount = [zeroNumber, oneNumber, twoNumber, threeNumber, fourNumber, fiveNumber]
      console.log("ARRAY OF PPL WITH SCORES: " + arrayCount)
      return arrayCount
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
            <Signup />}
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
      
      </div>
      
    );
  }
}




export default App;
