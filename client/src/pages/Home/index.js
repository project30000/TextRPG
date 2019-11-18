import React, { Component } from 'react'
import axios from 'axios'


class Home extends Component {

    constructor() {
        super()
        this.state = {

        }

    }



    render() {
        const imageStyle = {
        }
        return (
            <div>
                {/* <div>
            <audio ref="audio_tag" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" controls autoPlay/>
 </div> */}
                <div class="parallax">
                    <div id="group1" class="parallax__group">
                        <div class="parallax__layer parallax__layer--base">
                            {/* <img src="https://i.ibb.co/ck8GYj4/renderbuilding1.png"></img> */}
                            {/* <img src="https://i.ibb.co/Nm3kJJM/picture1.png"></img> */}
                            {/* <img src="https://i.ibb.co/XxYV7pB/picturebackground2.jpg"></img>   */}
                            <img src="https://live.staticflickr.com/65535/49081592552_b8fc4b0b36_k.jpg"></img>

                        </div>
                    </div>
                    <div id="group2" class="parallax__group">
                        <div class="parallax__layer parallax__layer--base">
                            <div class="title">
                                <h1>Wake up.....</h1>
                                <hr></hr>
                                <p>Explore your day. And adventure that can take you nowhere or somewhere. Choose the faith for your day. </p>
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
                            <img src="https://live.staticflickr.com/65535/49081549446_9e74d07c10_k.jpg"></img>
                        </div>
                    </div>
                    {/* <div id="group4" class="parallax__group">
                        <div class="parallax__layer parallax__layer--base">
                        </div> */}
                        {/* <div class="parallax__layer parallax__layer--back"> */}
{/* 

                            <h1>Are you ready to wake up?</h1>
                            <hr></hr>
                            <p>Ready to take on the day through the choices you make?</p>
                            <br></br>
                            <div class= "homeloginsign">
                            <button class="loginhome" type="submit" formaction="/login">Login</button>
                            <button formaction="/sign-up">Sign Up</button>
                            </div> */}

                        {/* </div> */}
                        {/* <div class="parallax__layer parallax__layer--deep">
                        </div>
                    </div> */}
                    <div id="group5" class="parallax__group">
                        <div class="parallax__layer parallax__layer--fore">
                            <img src="https://live.staticflickr.com/65535/49081693542_70757cb03e_k.jpg"></img>
                        </div>
                        <div class="parallax__layer parallax__layer--base">
                            <div class="title">
                                {/* <img src="https://i.ibb.co/52n5DP9/background-image-3.jpg"></img> */}

                            </div>
                        </div>
                    </div>
                    {/* <div id="group6" class="parallax__group">
                    <div class="parallax__layer parallax__layer--back"> */}
                    {/* <img src="https://i.ibb.co/Nm3kJJM/picture1.png"></img> */}

                    {/* </div>
                    <div class="parallax__layer parallax__layer--base"> */}
                    {/* <img src="https://i.ibb.co/nzw417m/Untitled-333.png"></img>  */}
                    {/* <div class="title"></div>
                    </div>
                </div> */}
                    <div id="group7" class="parallax__group">
                        <div class="parallax__layer parallax__layer--base">
                            <div class="title">
                                <pl>Project by Fahad, Al, Kemp and will.</pl>
                                <ul>
                                    <li><a href="https://twitter.com/">Twitter</a></li>
                                    <li><a href="facebook.com">Facebook</a></li>
                                    <li><a href="mailto:digitalcrab@digitalcrab.com">Email</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Home
