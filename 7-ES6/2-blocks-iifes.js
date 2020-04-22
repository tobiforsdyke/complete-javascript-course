// ******************
// Blocks and IIFEs
// const and let are block scoped
// var is not blcok scoped so can be accessed outside the blocks
// ******************

console.log('========== ES6 ==========');

// ES6:

{
    const a = 1;
    let b = 2;
    var c = 3;
}

// Cannot access a or b outside the block...
// console.log(a + b);
// But can access c as it is a variable...
console.log(c);

console.log('========== ES5 IIFE ==========');

// ES5:

(function() {
    var c = 3;
})();

// Cannot access c outside the immediately invoked function...
// console.log(c);