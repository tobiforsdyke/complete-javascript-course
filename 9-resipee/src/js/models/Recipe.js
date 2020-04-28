import axios from 'axios';
import {app_key_spoonacular, app_key_edamam, app_id_edamam} from '../config';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }
    async getRecipe() {
        try {
            const res = await axios(`https://api.spoonacular.com/recipes/${this.id}/information?&apiKey=${app_key_spoonacular}`);
            this.title = res.data.title;
            this.credits = res.data.creditsText;
            this.img = res.data.image;
            this.url = res.data.sourceUrl;
            this.instructions = res.data.instructions;
            this.ingredients = res.data.extendedIngredients;
            this.servings = res.data.servings;
            this.cookingtime = res.data.cookingMinutes;
            console.log(res);
        } catch (error) {
            console.log(error);
            alert('Something went wrong...');
        }
    }

    calcTime() {
        // Assuming that we need 15 mins for each 3 ingredients
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }
    calcServings() {
        this.servings = 4;
    }
};