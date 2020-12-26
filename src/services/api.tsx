import axios from 'axios'


const api = axios.create({
    baseURL: 'https://analise-de-markov-api.herokuapp.com/'
})

export default api