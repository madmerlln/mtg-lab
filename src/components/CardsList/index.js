import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Card = styled.div`
  width: 256px;
  height: 356px;
  position: relative;
  perspective: 1000px;
  margin-bottom: 30px;
  cursor: pointer;
  text-shadow: 1px 1px 10px red;
  h2 {
    font-size: 22px;
    margin: 20px;
  }
  p {
    font-size: 16px;
    margin: 20px;
  }
  hr {
    border: none;
    border-bottom: 1px solid black !important;
    margin: 20px;
  }
  ul {
    padding: 0px;
    margin: 20px;
  }
  ul h3 {
    font-size: 18px;
  }
  ul li {
    list-style: none;
    font-size: 16px;
    margin-left: 20px;
  }
  .front,
  .back {
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
    background-color: #ababab;
    background-image: url(${(props) => props.theme.image_uris.normal});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .front img {
    width: 100%;
    max-width: 183px;
  }
  .back {
    background-color: #bdbdbd;
    transform: rotateY(180deg);
  }
  /* &:hover .front {transform: rotateY(180deg);}
    &:hover .back {transform: rotateY(360deg);} */
`;

export default function CardsList({
  cardInfo,
  menuOptionsControll,
  menuOptionsConfig,
}) {
  const { name, text } = cardInfo;

  useEffect(() => {}, []);

  function handleClick() {
    const options = {
      method: 'GET',
      url: 'http://blogdevlucas-com-br.umbler.net/json/api/comment/1',
      headers: { authorization: 'Basic dW1ibGVyOnRlc3RlaG9zcGVkYWdlbQ==' },
      mode: 'no-cors',
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const cardOptions = (card, event) => {
    event.persist();
    console.log(event);
    menuOptionsControll(true);
    menuOptionsConfig({
      x: event.pageX,
      y: event.pageY,
      card: card,
    });
  };

  return (
    <Card
      className="m-card"
      onContextMenu={(e) => {
        e.preventDefault();
        cardOptions(cardInfo, e);
      }}
      onClick={handleClick}
    >
      <div className="front"></div>
      <div className="back">
        <h2>{name}</h2>
        <p>{text}</p>
      </div>
    </Card>
  );
}
