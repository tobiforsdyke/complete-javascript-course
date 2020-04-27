/* import textImport from './models/Search';
// import {addFunction as add, multiplyFunction as multiply, ID} from './views/searchView';
import * as searchView from './views/searchView';

console.log(`Using imported functions ${searchView.addFunction(ID, 2)} and ${searchView.multiplyFunction(2, searchView.ID)}, and then displaying the following string: ${textImport}.`); */

import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';

// **************************
// GLOBAL STATE OF THE APP
// - Search object
// - Current recipe object
// - Shopping list object
// - Liked recipes
// **************************
const state = {};

const controlSearch = async () => {
    // 1. Get query from view
    const query = searchView.getInput();
    if (query) {
        // 2. New search object and add  to state
        state.search = new Search(query);
        // 3. Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        // 4. Search for recipes
        await state.search.getResults();
        // 5. Render results in UI
        searchView.renderResults(state.search.result);
        console.log(state.search.result);
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

/* const search = new Search('tomato');
console.log(search); */
