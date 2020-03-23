import axios from "axios";

const cards = axios.create({baseURL: 'https://api.magicthegathering.io/v1/'});

export default cards;