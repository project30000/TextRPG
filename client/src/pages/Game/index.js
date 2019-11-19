import React, { Component } from 'react';
import API from '../../utils/API';
import './style.css';
import dialog from './dialog.json';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { withRouter } from "react-router"

class Game extends Component {
    state = {
        userID: "", //user logged in
        dialog: dialog,
        currentLine: dialog[19] //game init at first line
    }

    handleClick = (nextText, op, end) => {
        if (end == true) {
            // this.props.finishGame(this.props.data.userID, this.props.data.killCount)
            this.props.history.push('/endgame')
        }
        if (op) {
            this.props.incrementDeath(this.props.data.killCount);
        }
        this.setState({
            currentLine: dialog[nextText]
        })
        console.log(this.state.currentLine);
    }

    componentDidMount() {
        API.getMyDude(this.props.username).then(myDude => {
            // this.setState({userID: myDude})
        })
        this.setState({ currentLine: dialog[19] })
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
                                handleClick={this.handleClick.bind("click", option.nextText, option.kill, option.end)}
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