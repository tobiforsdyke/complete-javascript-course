/* export default 'I am an exported string.'; */

import axios from 'axios';
import {app_key_spoonacular, app_key_spoonacular2, numberOfResults, app_key_edamam, app_id_edamam} from '../config';

// Spoonacular API:
export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults() {
        try {
            const res = await axios(`https://api.spoonacular.com/recipes/search?query=${this.query}&number=${numberOfResults}&apiKey=${app_key_spoonacular2}`);
            this.result = res.data.results;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
};

/* // Edamam API:
export default class Search {
    constructor(query) {
        this.query = query;
    }
    async getResults() {
        try {
            const res = await axios(`https://api.edamam.com/search?q=${query}&app_id=${app_id_edamam}&app_key=${app_key_edamam}`);
            this.result = res.data.hits;
            console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
};
// getResults('pizza'); */

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
};
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
};
getResults('pizza'); */