import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {ThemeProvider} from 'styled-components';
import gsap from 'gsap';

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
            console.log(response);
            setCards(response.data.cards);
            const tl = gsap.timeline();
            tl.staggerFrom('.m-card', .3, {
                scale: 0,
                opacity: 0
            }, .3);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Wrap>
            
                {cards.map((response) => (
                    <ThemeProvider key={response.id} theme={response}>
                        <CardsList  cardInfo={response} />
                    </ThemeProvider>
                ))}
        </Wrap>
    )
}
