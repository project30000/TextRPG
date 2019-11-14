import React, { Component } from 'react';
import API from '../../utils/API';
import './style.css';
import dialog from './dialog.json';
import Button from '../../components/Button';
import Text from '../../components/Text';

class Game extends Component {
    state = {
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

    componentDidMount() {
        API.getMyDude(this.props.username).then(myDude => {
            this.setState({
                userID: myDude
            })
        })
        this.setState({currentLine:dialog[0]})
        // console.log(this.state.currentLine.options)
        // console.log(dialog[0])
        // this.startGame();
    }


    render() {
        return (
            <div>
                <br />
                <br />
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
                
            </div >
        )
    }
}

export default Game