import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';
import gsap from 'gsap';
import interact from 'interactjs'

import api from '../../services/Cards/';

import CardsList from '../../components/CardsList/';

const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

export default function Main() {

    const  [cards, setCards] = useState([]);

    useEffect(()=>{
        loadCards();
    }, []);

    const loadCards = async () => {
        try {
            const response = await api.get('/cards');
            const position = { x: 0, y: 0 }
            console.log(response);
            setCards(response.data.cards);
            const tl = gsap.timeline();
            tl.staggerFrom('.m-card', .3, {
                scale: 0,
                top: 100,
                opacity: 0
            }, .3);
            interact('.m-card').draggable({
                listeners: {
                    start (event) {
                        const target = event.target;

                        target.setAttribute('style', '');
                        position.x = (parseFloat(target.getAttribute('data-x')) || 0);
                        position.y = (parseFloat(target.getAttribute('data-y')) || 0);
                        console.log(event.target)
                    },
                    move (event) {
                        const target = event.target;
                        position.x += event.dx;
                        position.y += event.dy;
                        target.setAttribute('data-x', position.x)
                        target.setAttribute('data-y', position.y)
                        event.target.style.transform =
                            `translate(${position.x}px, ${position.y}px)`;
                    },
                  }
            })
        } catch (error) {
            console.error(error);
        }
    }

    const resetCards = ()=>{
        const cards = document.querySelectorAll('.m-card');
        cards.forEach(item=>{
            item.setAttribute('data-x', '0');
            item.setAttribute('data-y', '0');
            item.setAttribute('style', 'translate(0px, 0px);transition: .3s ease all;');
        })
    }
    return (
        <Wrap>
                <button onClick={()=>{resetCards()}}>Resetar</button>
                {cards.map((response) => {
                    if(response.imageUrl){
                        return(<ThemeProvider key={response.id} theme={response}>
                            <CardsList  cardInfo={response} />
                        </ThemeProvider>
                        )
                    }
                })}
        </Wrap>
    )
}
