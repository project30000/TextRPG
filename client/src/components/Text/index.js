import React, { component } from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';


const Text = props => (
    <p className="textee">{props.text}</p>
)

export default Text