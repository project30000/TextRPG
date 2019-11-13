import React, { Component } from 'react';
import API from '../../utils/API';
import './style.css';
import dialog from './dialog.json';
import Button from '../../components/Button';
import Text from '../../components/Text';


class Game extends Component {
    state = {
        dude: "", //user logged in
        data: dialog,
        curOptions: dialog[0]
    }

    handleClick() {
        alert('Click happened');
        this.setState({
            curOptions: dialog[1]
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
                < Text text={this.state.curOptions.text} />
                <br />
                < div >
                    {
                        this.state.curOptions.options.map(option => (
                            console.log(option),
                            <span onClick={this.handleClick.bind(this)}>
                            < Button
                                option={option.text}
                                id={option.id}
                            />
                            </span>
                            ))
                    }
                </div >
            </div >
        )

    }
}

export default Game