import React, { Component } from 'react';
import API from '../../utils/API';
import './style.css';
import dialog from './dialog.json';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Sound from 'react-sound';
import videoGame from "../../assets/videoGame.wav"

class Game extends Component {
    state = {
        dude: "", //user logged in
        currentLine: dialog[0]
    }
        //sound during game
    render() {
        return (
            
          <Sound
            url={videoGame}
            playStatus={Sound.status.PLAYING}
            //onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            //onFinishedPlaying={this.handleSongFinishedPlaying}
          />
        );
      }


    handleClick = () => {
        alert('Your next Line is: ' + this.id);
        console.log(dialog[0]);
        // console.log(this.state.data);
        
        this.setState({
            currentLine: dialog[this.id]
        })
    };

    componentDidMount() {
        API.getMyDude(this.props.username).then(myDude => {
            this.setState({
                dude: myDude
            })
        })
        // this.startGame();
    }


    render() {
        // const textNodes = dialog;

        // const showTextNode = (textNodeIndex) => {
        //     const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)}


        return (
            <div>
                <br />
                <br />
                {/* {console.log(textNodes[0])} */}
                < Text text={this.state.currentLine.text} />

            
                <br />
                < div >
                    {
                        this.state.currentLine.options.map(option => (
                            // console.log(option.nextText),
                            < Button
                                option={option.text}
                                id={option.nextText}
                                handleClick={this.handleClick}
                            />
                            ))
                    }
                </div >
            </div >
        )

    }
}

export default Game