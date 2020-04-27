/* export default 'I am an exported string.'; */

import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults() {
        try {
            const app_key = 'c90e8353cf544fcaac521bc1b917d9f8'
            const res = await axios(`https://api.spoonacular.com/recipes/search?query=${this.query}&apiKey=${app_key}`);
            this.result = res.data.results;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}

/* async function getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '1a28000d4cmsh606fcb213176242p165086jsn05f07b1b93c2';
    const res = await axios(`${proxy}http://api.yummly.com/v1/api/recipes?key=${key}&?q=${query}`);
    console.log(res);
} */

/* // Edamam API:
async function getResults(query) {
    try {
        const app_id = '79c790e7'
        const app_key = '89163c0e021477803a38d551d2764afa'
        const res = await axios(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`);
        const recipes = res.data.hits;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }
}
getResults('pizza');

// Path: https://api.edamam.com/search
// app_id = 79c790e7
// app_key = 89163c0e021477803a38d551d2764afa */

/* // Spoonacular API:
async function getResults(query) {
    try {
        const app_key = 'c90e8353cf544fcaac521bc1b917d9f8'
        const res = await axios(`https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${app_key}`);
        const recipes = res.data.results;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }
}
getResults('pizza'); */