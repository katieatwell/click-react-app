import React, { Component } from 'react';
import Maindiv from "../MainWrapper"

const ScoreCounter = props => (
    <p count={props.count}>Count: {props.scoreCount}</p>
);

export default ScoreCounter;
