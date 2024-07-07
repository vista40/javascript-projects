//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
sliceOne = language.slice(0, 1);
console.log(sliceOne);
sliceTwo = language.slice(4, 5);
console.log(sliceTwo);
console.log(`${sliceOne}${sliceTwo}`);
//2. Without using slice(), use method chaining to accomplish the same thing.
initialsLanguageOne = language.replace("a", "S").replace("v", " ").replace("a", " ");
console.log(initialsLanguageOne);
initialsLanguageTwo = initialsLanguageOne.replace("  Script", ".");
console.log(initialsLanguageTwo);
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for ${language} is ${initialsLanguageTwo}`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
titleCase = notTitleCase.replace("t", "T").replace("c", "C");
console.log(titleCase);
