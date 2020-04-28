/* import textImport from './models/Search';
// import {addFunction as add, multiplyFunction as multiply, ID} from './views/searchView';
import * as searchView from './views/searchView';

console.log(`Using imported functions ${searchView.addFunction(ID, 2)} and ${searchView.multiplyFunction(2, searchView.ID)}, and then displaying the following string: ${textImport}.`); */

import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import {elements, renderLoader, clearLoader} from './views/base';

// **************************
// GLOBAL STATE OF THE APP
// - Search object
// - Current recipe object
// - Shopping list object
// - Liked recipes
// **************************
const state = {};

// **************************
// SEARCH CONTROLLER:
// **************************
const controlSearch = async () => {
    // 1. Get query from view
    const query = searchView.getInput();
    if (query) {
        // 2. New search object and add  to state
        state.search = new Search(query);
        // 3. Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        try {
            // 4. Search for recipes
            await state.search.getResults();
            // 5. Render results in UI
            clearLoader();
            searchView.renderResults(state.search.result);
            console.log(state.search.result);
        } catch (err) {
            alert('Something went wrong with the search...');
            clearLoader();
        }
        
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const gotoPage = parseInt(btn.dataset.pagetogoto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, gotoPage);
    }
});

// **************************
// RECIPE CONTROLLER:
// **************************
const controlRecipe = async () => {
    // Get ID from URL
    const id = window.location.hash.replace('#', '');
    console.log(id);
    if (id) {
        // Prepare UI for changes
        // Create new recipe object
        state.recipe = new Recipe(id);
        try {
            // Get recipe data
            await state.recipe.getRecipe();
            // Calculate servings and time functions (or data)
            state.recipe.calcTime();
            state.recipe.calcServings();
            // Render recipe
            console.log(state.recipe);
        } catch (err) {
            alert('Error processing recipe...');
        }
    }
};

/* Replace the below multiple line event listeners with an array loop:
window.addEventListener('hashchange', controlRecipe);
window.addEventListener('load', controlRecipe); */
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));