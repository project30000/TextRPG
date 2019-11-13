import React, { component } from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';


const Text = props => (
    <Typist><p className="text">{props.text}</p></Typist>
)

export default Text