import React, { Component } from 'react';
import Sound from 'react-sound';
import videoGame from ../../.Sound

class Sound extends Component {

handleSongLoading = event => {
    event.preventDefault();
    console.log("song loaded")
}
handleSongPlaying = event => {
    event.preventDefault();
    console.log("song playing")

}

render() {

return (
    //sound for game
  <Sound
    url={videoGame}
    playStatus={Sound.status.PLAYING}
    onLoading={this.handleSongLoading}
    onPlaying={this.handleSongPlaying}
    onFinishedPlaying={this.handleSongFinishedPlaying}


}}