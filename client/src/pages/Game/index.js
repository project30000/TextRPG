import React, { Component } from 'react';
import API from '../../utils/API';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import './style.css';
import dialog from './dialog.json';
import Button from '../../components/Button';
import Text from '../../components/Text';

class Game extends Component {
    state = {
<<<<<<< HEAD
        dude: "", //user logged in
        data: dialog,
        curOptions: dialog[1]
        

    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Button clicked!");
        console.log(document.getElementById('optionButtons').value);
    };
=======
        userID: "", //user logged in
        dialog: dialog,
        currentLine: dialog[0]
    }

    handleClick=(nextText)=>{
        // alert('Your next Line is: ' + nextText);
        this.setState({
            currentLine: dialog[nextText]
        })
        console.log(this.state.currentLine);
    }
>>>>>>> 3c05e456d10fc34bca57da741580679968dca416

    componentDidMount() {
        API.getMyDude(this.props.username).then(myDude => {
            this.setState({
                userID: myDude
            })
        })
<<<<<<< HEAD

=======
        this.setState({currentLine:dialog[0]})
        // console.log(this.state.currentLine.options)
        // console.log(dialog[0])
>>>>>>> 3c05e456d10fc34bca57da741580679968dca416
        // this.startGame();
    }


    // const imageStyle = {
    //     width: 400
    // }

    render() {
<<<<<<< HEAD
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

=======
>>>>>>> 3c05e456d10fc34bca57da741580679968dca416
        return (
            <div>
                <br />
                <br />
<<<<<<< HEAD

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
=======
                < Text text={this.state.currentLine.text} />
                <br />
               
                    {this.state.currentLine.options.map(option => (
                        console.log(option.nextText),
                        < Button
                            option={option.text}
                            nextText={option.nextText}
                            handleClick={this.handleClick.bind("click", option.nextText)}
                        />
                    ))}
                
>>>>>>> 3c05e456d10fc34bca57da741580679968dca416
            </div >
        )
    }
}

export default Game