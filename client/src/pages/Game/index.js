import React, { Component } from 'react';
import API from '../../utils/API';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import './style.css';
import dialog from './dialog.json';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Sound from 'react-sound';
import videoGame from "../../assets/videoGame.wav"

class Game extends Component {
    state = {
        dude: "", //user logged in
        data: dialog,
        curOptions: dialog[1]
        

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

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Button clicked!");
        console.log(document.getElementById('optionButtons').value);
    };

    componentDidMount() {
        API.getMyDude(this.props.username).then(myDude => {
            this.setState({
                dude: myDude
            })
        })

        // this.startGame();
    }


    // const imageStyle = {
    //     width: 400
    // }

    render() {
        const textNodes = dialog;



        const showTextNode = (textNodeIndex) => {
            const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
            // textElement.innerText = textNode.text
            // while (optionButtonsElement.firstChild) {
            //     optionButtonsElement.removeChild(optionButtonsElement.firstChild)
            // }
            // this.state.setState({ curOptions: textNode.options })
        }

        // const showOption = (option) => {
        //     return option.requiredState == null
        // }

        // const selectOption = (option) => {
        //     const nextTextNodeId = option.nextText
        //     if (nextTextNodeId <= 0) {
        //         // return startGame()
        //     }
        //     showTextNode(nextTextNodeId)
        // }

        // const startGame = () => {
        //     showTextNode(1)
        // }

        return (
            <div>
                <br />
                <br />

                {/* {console.log(textNodes[0])} */}



                < Text
                    text={this.state.curOptions.text}
                />


            <br />
                {console.log("Check: " + this.state.curOptions)}
                < div >
                    {
                        this.state.curOptions.options.map(option => (
                            < Button
                                onClick={this.handleFormSubmit}
                                option={option.text}
                            />))
                    }
                </div >
            </div >
        )

    }
}

export default Game