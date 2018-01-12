import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';

const EachImage = props => (
    <div>
    <Image alt={props.alt} src={props.src} onClick={() => {props.clickTrue(props.id)}}/>
    </div>
);

export default EachImage;
