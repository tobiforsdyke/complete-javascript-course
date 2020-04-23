// ******************
// Coding Challenge 8
// ******************

/* 
Suppose that you're working in a small town administration and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (formula: number of trees/park area)
2. Average age of each towns park (formula: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the towns streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown the default is normal

All the report data should be printed to the console.

HINT: use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, deconstructing etc.
*/

class Element {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor (name, buildYear, areaSize, numTrees) {
        super (name, buildYear);
        this.areaSize = areaSize; //km2
        this.numTrees = numTrees;
    }
    treeDensity() {
        const density = Math.round(this.numTrees / this.areaSize);
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

class Street extends Element {
    constructor (name, buildYear, length, size = 3) {
        super (name, buildYear);
        this.length = length;
        this.size = size;
    }
    classifyStreet() {
        const classifySize = new Map();
        classifySize.set(1, 'tiny');
        classifySize.set(2, 'small');
        classifySize.set(3, 'normal');
        classifySize.set(4, 'big');
        classifySize.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classifySize.get(this.size)} sized street.`);
    }
}

const allParks = [
    new Park('Green Park', 1987, 0.2, 215),
    new Park('National Park', 1894, 2.9, 3541),
    new Park('Oak Park', 1953, 0.4, 949)
];
const allStreets = [
    new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 27, 2),
    new Street('4th Street', 2015, 0.8),
    new Street('Sunset Bvd', 1982, 2.5, 5)
];

function calc(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    return [sum, Math.round(sum / arr.length)];
}

function reportParks(p) {
    console.log('---------- PARKS REPORT ----------');
    // Tree Density - numTrees/areaSize - already a function above
    p.forEach(el => el.treeDensity());
    // Average age of parks
    const ages = p.map(el => new Date().getFullYear() - el.buildYear)
    const [totalAge, averageAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average age of ${averageAge} years.`);
    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
}
function reportStreets(s) {
    console.log('---------- STREETS REPORT ----------');
    // Total average length
    const [totalLength, averageLength] = calc(s.map(el => Math.round(el.length)));
    console.log(`Our ${s.length} streets have a total length of ${totalLength}km, with an average of ${averageLength}km.`);
    // Size classification of all streets
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);