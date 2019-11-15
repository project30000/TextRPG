import React, { Component } from 'react';
import Sound from 'react-sound';


const Media = () => (
// render() {
     
    //sound for game
    <Sound 
    url="https://www.freesoundeffects.com/free-track/open-door-1-426743/"
    playStatus={Sound.status.PLAYING}
    // onLoading={this.handleSongLoading}
    // onPlaying={this.handleSongPlaying}
    // onFinishedPlaying={this.handleSongFinishedPlaying}
    />
// }
)

export default Media


// handleSongLoading = event => {
    //     event.preventDefault();
    //     console.log("song loaded")
    // }
    // handleSongPlaying = event => {
    //     event.preventDefault();
    //     console.log("song playing")
    
    // }