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
        this.setState({ currentLine: dialog[0] })
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
            </div >
        )
    }
}

export default Game