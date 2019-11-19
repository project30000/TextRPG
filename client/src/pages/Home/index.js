import React, { Component } from 'react'
import Typist from 'react-typist';
import { Link } from 'react-router-dom'



class Home extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        const imageStyle = {}
        return (
            <div>
                <div class="parallax">
                    <div id="group1" class="parallax__group">
                        <div class="parallax__layer parallax__layer--base">
                            <img src="https://live.staticflickr.com/65535/49081592552_b8fc4b0b36_k.jpg" />
                        </div>
                    </div>
                    <div id="group2" class="parallax__group">
                        <div class="parallax__layer parallax__layer--base">
                            <div class="title">
                                <Typist className="MyTypist"><Typist.Delay ms={2000} />  Wake up...</Typist>
                                <br />
                                <hr />
                                <br />
                                <p>Explore your day.
                                Go on an adventure that changes based on your choices.
                                Where will your path take you?
                                    </p>
                                <Link to="/login" className="btn btn-link text-secondary">
                                    <span className="text-secondary">Play Now</span>
                                </Link>                            
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
                    <div id="group5" class="parallax__group">
                        <div class="parallax__layer parallax__layer--fore">
                            <img src="https://live.staticflickr.com/65535/49081693542_70757cb03e_k.jpg"></img>
                        </div>
                        <div class="parallax__layer parallax__layer--base">
                            <div class="title">
                            </div>
                        </div>
                    </div>
                    <div id="group7" class="parallax__group">
                        <div class="parallax__layer parallax__layer--base">
                            <div class="title">
                                <br />
                                <h4>Project by Fahad, Al, Kemp and will.</h4>
                                <ul>
                                    <li><a href="https://twitter.com/">Twitter</a></li>
                                    <li><a href="facebook.com">Facebook</a></li>
                                    <li><a href="mailto:digitalcrab@digitalcrab.com">Email</a></li>
                                </ul>
                                <br />
                                <br />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Home
