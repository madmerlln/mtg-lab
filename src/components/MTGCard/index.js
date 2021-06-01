import React from 'react'

import Card from './style';

export default function MTGCard(props) {
    const {name, text} = props.cardInfo;

    return (
        <Card className="m-card">
            <div className="front"></div>
            <div className="back">
                <h2>{name}</h2>
                <p>{text}</p>
            </div>
        </Card>
    )
}
