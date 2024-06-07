(function(){
    
console.log('hey');
    
})
();


(function sam (){
    console.log('doge');
})
();

// You need to avoid variable pollution in the global scope.
// You want to encapsulate a specific functionality or protect sensitive data.


// disadvantage
// Readability: IIFEs can make code less readable for beginners, especially with complex syntax and nested expressions. Clarity can suffer if used excessively or carelessly.
// Debugging difficulty: Debugging errors within an IIFE can be more challenging 
// Reusability limitations: Functions defined within an IIFE are typically meant for single-use and accessing them from outside can be cumbersome. 
// Performance
// Increased code complexity:
