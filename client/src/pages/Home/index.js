import React, { Component } from 'react'
import axios from 'axios'


class Home extends Component {
    
        constructor() {
            super()

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
                        
                        </div>
                    </div>
                    <div class="parallax__layer parallax__layer--back">
                    </div>
                </div>
                <div id="group3" class="parallax__group">
                    <div class="parallax__layer parallax__layer--fore">
                        <div class="title">
                        
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
