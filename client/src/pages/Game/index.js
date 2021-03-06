import React, { Component } from 'react';
import API from '../../utils/API';
import './style.css';
import dialog from './dialog.json';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { withRouter } from "react-router";
import axios from "axios";


class Game extends Component {
    state = {
        dialog: dialog,
        currentLine: dialog[19], //game init at first line
        character: "",
        characterId: "",
        killCount: 0,
    }

    handleClick = (nextText, op, end, endingScore) => {
        if (end === true) {
            console.log("endingScore: on click" + endingScore)
            this.props.finishGame(endingScore)
            this.props.history.push('/endgame')
        }
        if (op === true) {
            this.props.incrementDeath(this.props.data.killCount);
        }
        this.setState({
            currentLine: dialog[nextText]
        })
       
    }

    getCharacter = () => {
        axios.get('/characters/' + this.props.data.character).then(response => {
            let character = response.data.name;
            let characterId = response.data._id;

            this.setState({
                character: character,
                characterId: characterId,
            })
        })
    }

    componentDidMount() {
        API.getMyDude(this.props.username).then(myDude => {
            // this.setState({userID: myDude})
        })
        this.setState({ currentLine: dialog[19] })
        // API.getMyDude(this.props.username).then(myDude => {
        //     this.setState({userID: myDude})
        // })
        this.getCharacter()
    }

    render() {
        let nextOptions = this.state.currentLine.options.filter(e => e.killcount === this.props.data.killCount)
        return (
            <div>
                <br />
                <div class="container">
                    <br />
                    < Text text={this.state.currentLine.text} />
                    {
                        nextOptions.map(option => (
                            < Button
                                option={option.text}
                                nextText={option.nextText}
                                handleClick={this.handleClick.bind("click", option.nextText, option.kill, option.end, option.endingScore)}
                            />
                        ))
                    }
                    <br />
                </div>
                <br />
                {/* <div>
                    <audio ref="audio_tag" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" controls autoPlay />
                </div> */}

            </div >
        )
    }
}

export default withRouter(Game)