import React, { Component } from 'react';
import Sound from 'react-sound';


const Media = () => (
// render() {
     
    //sound for game
    <Sound 
    url={"https://www.audioblocks.com/stock-audio/vibe-descending-ding-he3hl22lvrk0wxsi1r.html"}
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