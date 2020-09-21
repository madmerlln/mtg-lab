import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const Options = styled.div`
  display: none;
  opacity: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 2px 3px 20px #000;
  overflow: hidden;
  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    li {
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 110px;
      font-family: sans-serif;
      cursor: pointer;
      transition: 0.3s ease-in all;
      &:hover {
        background: #ccc;
      }
    }
  }
`;

export default function OptionsMenu({ show, config }) {
  useEffect(() => {
    if (show) {
      const optionsMenu = document.querySelector('.d-optionMenu');
      gsap.fromTo(
        optionsMenu,
        {
          opacity: 0,
          display: 'none',
          scale: 0.7,
        },
        {
          display: 'block',
          opacity: 1,
          scale: 1,
        },
      );
    }
  }, [show, config]);

  const addToColection = (card) => {
    const cardsCollection =
      JSON.parse(localStorage.getItem('cardsCollection')) || [];
    cardsCollection.push(card);
    localStorage.setItem('cardsCollection', JSON.stringify(cardsCollection));
  };

  const goToStore = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Options className="d-optionMenu" style={{ top: config.y, left: config.x }}>
      <ul>
        <li
          onClick={() => {
            addToColection(config.card);
          }}
        >
          Adicionar
        </li>
        <li
          onClick={() => {
            goToStore(config.card.purchase_uris.tcgplayer);
          }}
        >
          Comprar
        </li>
      </ul>
    </Options>
  );
}
