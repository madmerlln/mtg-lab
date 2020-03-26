import React, {useEffect} from 'react'
import styled from 'styled-components';

const Card = styled.div`
    width: 256px;
    height: 356px;
    position: relative;
    perspective: 1000px;
    margin-bottom:30px;
    cursor:pointer;
    text-shadow:1px 1px 10px red;
    h2{
    font-size: 22px;
    margin:20px;
    }
    p{
    font-size:16px;
    margin:20px;
    }
    hr{
    border:none;
    border-bottom:1px solid black !important;
    margin:20px;
    }
    ul{
    padding: 0px;
    margin: 20px;
    }
    ul h3{
    font-size: 18px;
    }
    ul li{
    list-style:none;
    font-size: 16px;
    margin-left:20px;
    }
    .front, .back {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transition: 1s cubic-bezier(0.45, -0.1, 0, 1.69) all;
    backface-visibility: hidden;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
    }
    .front {
    background-color: #ABABAB;
    background-image: url(${props => props.theme.imageUrl});
    background-size: cover;
    display:flex;
    justify-content:center;
    align-items:center;
    }
    .front img{
    width:100%;
    max-width:183px;
    }
    .back {
    background-color: #BDBDBD;
    transform: rotateY(180deg);
    }
    /* &:hover .front {transform: rotateY(180deg);}
    &:hover .back {transform: rotateY(360deg);} */
`;

export default function CardsList(props) {
    const {name, text} = props.cardInfo;

    useEffect(()=>{
    },[]);

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
