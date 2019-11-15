import React, { Component } from 'react';
import API from '../../utils/API';
import './style.css';
import dialog from './dialog.json';
import Button from '../../components/Button';
import Text from '../../components/Text';

class Game extends Component {
    state = {
        userID: "5dca461355fad0bd7116f38a", //user logged in
        dialog: dialog,
        currentLine: dialog[0] //game init at first line
    }

    handleClick = (nextText, op, end) => {
        if (op) {
            this.props.incrementDeath(this.props.data.killCount);
        }
        if (end) {
            this.props.finishGame(this.props.data.userID, this.props.data.killCount)
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
        console.log("killcount ==========" + this.props.data.killCount)
        this.setState({ currentLine: dialog[0] })
        this.props.finishGame(this.state.userID)
    }

    render() {
        var nextOptions = this.state.currentLine.options.filter(e => e.killcount === this.props.data.killCount)
        return (
            <div>
                <br />
                <div class="container">
                    <br />
                    < Text text={this.state.currentLine.text} />
                    <br />
                    {

                        console.log(nextOptions)
                    }
                    {
                        nextOptions.map(option => (
                            // console.log(option.nextText)
                            // if (option.killcount > this.state.killCount)
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
            </div >
        )
    }
}

export default Game