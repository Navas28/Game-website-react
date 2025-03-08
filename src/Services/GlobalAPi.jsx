import axios from "axios";

const key= "1fd01a86b82d4a5397ea0c713b8415a6";

const axiosCreate = axios.create ({
    baseURL: 'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key='+key)
const getAllGames = axiosCreate.get('/games?key='+key)
const getGameListByGenreId = (id) => axiosCreate.get('/games?key='+key+'&genres='+id)

export default{
    getGenreList,
    getAllGames,
    getGameListByGenreId
}

// game news api =  a84244c9925f5ce08bfdf5e023067604
