import React, { Component } from 'react';
import API from '../../utils/API';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import './style.css';


const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option_buttons');

// const textNodes = "";


// const showTextNode = (textNodeIndex) => {
//     const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
//     textElement.innerText = textNode.text
//     while (optionButtonsElement.firstChild) {
//         optionButtonsElement.removeChild(optionButtonsElement.firstChild)
//     }

//     textNode.options.forEach(option => {
//         if (showOption(option)) {
//             const button = document.createElement('button')
//             button.innerText = option.text
//             button.classList.add('btn')
//             button.addEventListener('click', () => selectOption(option))
//             optionButtonsElement.appendChild(button)
//         }
//     })
// }
// const showOption = (option) => {
//     return option.requiredState == null
// }

// const selectOption = (option) => {
//     const nextTextNodeId = option.nextText
//     if (nextTextNodeId <= 0) {
//         return startGame()
//     }
//     showTextNode(nextTextNodeId)
// }

// const startGame = () => {
//     showTextNode(1)
// }


class Game extends Component {
    state = {
        dude: ""
    }

    componentDidMount() {
        API.getMyDude(this.props.username).then(myDude => {
            this.setState({
                dude: myDude
            })
        })
        // this.startGame();
    }

    render() {
        const imageStyle = {
            width: 400
        }

        return (
            <div>
                <br />
                <br />

                <div class="container">
                    <Typist>
                        <p> You're awake. </p>
                        <Typist.Delay ms={1000} />

                        You must have been asleep for weeks.

                    </Typist>
                    <br />
                    <div id="option-buttons" class="btn-grid">
                        <button class="btn">Option 1</button>
                        <button class="btn">Option 2</button>
                        <br />
                        <button class="btn">Option 3</button>
                        <button class="btn">Option 4</button>
                    </div>
                </div>
            </div>
        )

    }
}

export default Game