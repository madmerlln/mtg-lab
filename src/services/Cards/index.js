import axios from 'axios';

const cards = axios.create({ baseURL: 'https://api.scryfall.com/' });

export default cards;
