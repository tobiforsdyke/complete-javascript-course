// ******************
// Rest Parameters
// ******************

/* 
// ES5
function isFullAge5() {
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2020 - cur) >= 18);
    });
}

isFullAge5(1990, 2005, 1965);
isFullAge5(1990, 2005, 1965, 2016, 1987);

console.log('==== ES6 ====');

// ES6
function isFullAge6(...years) {
    // console.log(years);
    years.forEach(cur => console.log((2020 - cur) >= 18));
}

isFullAge6(1990, 2005, 1965);
isFullAge6(1990, 2005, 1965, 2016, 1987);
 */


function isFullAge5(limit) {
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    // console.log(argsArr);

    argsArr.forEach(function(cur) {
        console.log((2020 - cur) >= limit);
    });
}

isFullAge5(18, 1990, 2005, 1965);

console.log('==== ES6 ====');

// ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2020 - cur) >= limit));
}

isFullAge6(16, 1990, 2005, 1965); // first number (16) is the limit, the rest are the ...years
isFullAge6(18, 1990, 2005, 1965, 2016, 1987); // first number (18) is the limit and the rest are the ...years
