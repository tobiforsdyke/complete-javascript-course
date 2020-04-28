/* export const addFunction = (a, b) => a + b;
export const multiplyFunction = (a, b) => a * b;
export const ID = 23; */

import {elements} from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResultsList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
};

/* 
// Limit the titles to one line:
// 'Pasta with tomato and spinach'
acc: 0 / acc + cur.length = 5 / newTitle = ['Pasta']
acc: 5 / acc + cur.length = 9 / newTitle = ['Pasta', 'with']
acc: 9 / acc + cur.length = 15 / newTitle = ['Pasta', 'with', 'tomato']
acc: 15 / acc + cur.length = 18 / newTitle = ['Pasta', 'with', 'tomato']
acc: 18 / acc + cur.length = 24 / newTitle = ['Pasta', 'with', 'tomato']
TO USE in renderRecipe - (and also change default of 17 to 50):
Replace: ${recipe.title}
with: ${limitRecipeTitle(recipe.title, 50)}
 */
const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);
        return `${newTitle.join(' ')} ...`
    } return title;
};

// RENDERRECIPE FOR SPOONACULAR:
const renderRecipe = recipe => {
    const markup = `
        <li>
            <a class="results__link" href="#${recipe.id}">
                <figure class="results__fig">
                    <img src="https://webknox.com/recipeImages/${recipe.image}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(recipe.title, 30)}</h4>
                    <p class="results__author">Serves: ${recipe.servings} | Ready in: ${recipe.readyInMinutes} mins</p>
                </div>
            </a>
        </li>
    `;
    elements.searchResultsList.insertAdjacentHTML('beforeend', markup);
};

// type = 'prev' or 'next'
const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-pagetogoto=${type === 'prev' ? page - 1 : page + 1}>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
    </button>
`

const renderButtons = (page, numResults, resultsPerPage) => {
    const pages = Math.ceil(numResults / resultsPerPage);
    let button;
    if (page === 1 && pages > 1) {
        // Only button for Next Page
        button = createButton(page, 'next');
    } else if (page < pages) {
        // Show both Next and Previous buttons
        button = `
            ${createButton(page, 'next')}
            ${createButton(page, 'prev')}
        `;
        createButton(page, 'next');
    } else if (page === pages && pages > 1) {
        // Only button for Previous Page
        button = createButton(page, 'prev');
    }
    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (recipes, page = 1, resultsPerPage = 10) => {
    // Render results of current page
    const start = (page - 1) * resultsPerPage;
    const end = page * resultsPerPage;
    recipes.slice(start, end).forEach(renderRecipe);
    // Render pagination buttons
    renderButtons(page, recipes.length, resultsPerPage);
};