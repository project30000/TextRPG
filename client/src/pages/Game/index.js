import React, { Component } from 'react';
import API from '../../utils/API';

const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option_buttons');



class Game extends Component {
    state = {
        dude: false
    }

    componentDidMount() {
        API.getMyDude(this.props.username).then(myDude => {
            this.setState({
                dude: myDude
            })
        })
        this.startGame();
    }

    showTextNode = (textNodeIndex) => {
        const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
        textElement.innerText = textNode.text
        while (optionButtonsElement.firstChild) {
            optionButtonsElement.removeChild(optionButtonsElement.firstChild)
        }

        textNode.options.forEach(option => {
            if (showOption(option)) {
                const button = document.createElement('button')
                button.innerText = option.text
                button.classList.add('btn')
                button.addEventListener('click', () => selectOption(option))
                optionButtonsElement.appendChild(button)
            }
        })
    }
    showOption = (option) => {
        return option.requiredState == null
    }

    selectOption = (option) => {
        const nextTextNodeId = option.nextText
        if (nextTextNodeId <= 0) {
            return startGame()
        }
        showTextNode(nextTextNodeId)
    }

    startGame = () => {
        showTextNode(1)
    }

    render() {
        const imageStyle = {
            width: 400
        }

        return (
            <div>
                <div class="container">
                    <div id="text">Text</div>
                    <div id="option-buttons" class="btn-grid">
                        <button class="btn">Option 1</button>
                        <button class="btn">Option 2</button>
                        <button class="btn">Option 3</button>
                        <button class="btn">Option 4</button>
                    </div>
                </div>
            </div>
        )

    }
}

export default Game
