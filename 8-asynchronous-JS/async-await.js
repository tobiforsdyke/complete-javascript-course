/* const second = () => {
    setTimeout(() => {
        console.log('Async Hi after 2 seconds');
    }, 2000);
}

const first = () => {
    console.log('Hello');
    second();
    console.log('The end');
}

first(); */


// CALLBACK HELL:
/* function getRecipe() {
    setTimeout(() => {
        const recipeID = [523, 883, 432, 974];
        console.log(recipeID);

        setTimeout(id => {
            const recipe = {
                title: 'Fresh Pasta',
                publisher: 'Jonas'
            };
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
                const recipe2 = {
                    title: 'Italian Pizza',
                    publisher: 'Jonas'
                };
                console.log(`Related recipe by ${recipe.publisher}: Recipe ${id}, ${recipe2.title}`);
            }, 1500, recipe.publisher);
        }, 1500, recipeID[2]);
    }, 1500);
}
getRecipe(); */


// PROMISES (instead of callback hell):
/* const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
    }, 1500);
});

const getRecipe = recipeID => {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            const recipe = {
                title: 'Fresh Pasta',
                publisher: 'Jonas'
            };
        resolve(`${id}: ${recipe.title}`);  
        }, 1500, recipeID);    
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {
                title: 'Italian Pizza',
                publisher: 'Jonas'
            };
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
};

getIDs.then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[2]);
})
.then(recipe => {
    console.log(recipe);
    return getRelated('Jonas');
})
.then(recipe => {
    console.log(recipe);
})
.catch(error => {
    console.log('Error!');
}); */


// ASYNC/AWAIT (ES8)
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
    }, 1500);
});

const getRecipe = recipeID => {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            const recipe = {
                title: 'Fresh Pasta',
                publisher: 'Jonas'
            };
        resolve(`${id}: ${recipe.title}`);  
        }, 1500, recipeID);    
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {
                title: 'Italian Pizza',
                publisher: 'Jonas'
            };
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
};

// async function getRecipesAW() {
//     const IDs = await getIDs;
//     console.log(IDs);
//     const recipe = await getRecipe(IDs[2]);
//     console.log(recipe);
//     const related = await getRelated('Jonas');
//     console.log(related);
// };
// getRecipesAW();

async function getRecipesAW2() {
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated('Jonas');
    console.log(related);

    return recipe;
};
getRecipesAW2().then(result => console.log(`${result} is the best ever!`));