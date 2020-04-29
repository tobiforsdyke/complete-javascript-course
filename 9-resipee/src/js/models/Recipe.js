import axios from 'axios';
import {app_key_spoonacular, app_key_spoonacular2, numberOfResults, app_key_edamam, app_id_edamam} from '../config';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }
    async getRecipe() {
        try {
            const res = await axios(`https://api.spoonacular.com/recipes/${this.id}/information?&apiKey=${app_key_spoonacular2}`);
            this.title = res.data.title;
            this.credits = res.data.creditsText;
            this.img = res.data.image;
            this.url = res.data.sourceUrl;
            this.instructions = res.data.instructions;
            this.ingredients = res.data.extendedIngredients;
            this.servings = res.data.servings;
            this.cookingtime = res.data.cookingMinutes;
            // console.log(res);
            // Loops through and console logs all the ingredients:
            for (let i = 0; i < this.ingredients.length; i++) {
                console.log(this.ingredients[i].measures.metric);
            };
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
    parseIngredients() {
        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds', 'millilitres', 'millilitre', 'milliliters', 'milliliter'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound', 'ml', 'ml', 'ml', 'ml'];
        const units = [...unitsShort, 'kg', 'g'];
        const newIngredients = this.ingredients.map(el => {
            // Make units uniform
            let ingredient = el.toLowerCase;
            unitsLong.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, unitsShort[i]);
            });
            // Remove parentheses
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');
            // Parse ingredients into count, unit and ingredient
            const arrIng = ingredient.split(' ');
            const unitIndex = arrIng.findIndex(el2 => units.includes(el2));
            let objIng;
            if (unitIndex > -1) {
                // There is a unit
                // e.g. 4 1/2 cups, arrCount is [4, 1/2]
                // e.g. 4 cups, arrCount is [4]
                const arrCount = arrIng.slice(0, unitIndex);
                let count;
                if (arrCount.length === 1) {
                    count = eval(arrIng[0].replace('-', '+'));
                } else {
                    count = eval(arrIng.slice(0, unitIndex).join('+'));
                }
                objIng = {
                    count,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex + 1).join(' ')
                };
            } else if(parseInt(arrIng[0], 10)) {
                // There is no unit but first element is a number
                objIng = {
                    count: parseInt(arrIng[0], 10),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                };
            } else if (unitIndex === -1) {
                // There is no unit and no number in first position
                objIng = {
                    count: 1,
                    unit: '',
                    ingredient
                };
            }
            return objIng;
        });
        this.ingredients = newIngredients;
    }
    parseIngredientsSpoonacular() {
        // const unitsLong = this.ingredients.measures.metric.unitLong;
        // const unitsShort = this.ingredients.measures.metric.unitShort;
        /* const newIngredients = this.ingredients.map(el => {
            let objIng;
            // Loops through and console logs all the ingredients:
            for (let i = 0; i < this.ingredients.length; i++) {
                console.log(this.ingredients[i].measures.metric);
                objIng = {
                    count: this.ingredients[i].measures.metric.amount,
                    unit: this.ingredients[i].measures.metric.unitShort,
                    ingredient: this.ingredients[i]
                };
            return objIng;
            };
        }); */
        const newIngredients = this.ingredients.forEach(function(el) {
            let objIng;
            // Loops through and console logs all the ingredients:
            console.log(this.ingredients[i].measures.metric);
            objIng = {
                count: this.ingredients[i].measures.metric.amount,
                unit: this.ingredients[i].measures.metric.unitShort,
                ingredient: this.ingredients[i]
            }
            return objIng;
        });
        this.ingredients = newIngredients;
        console.log(this.ingredients);
    }
};