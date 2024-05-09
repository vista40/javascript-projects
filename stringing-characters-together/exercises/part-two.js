//Part Two Section One

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// First, print out the dna strand in it's current state.
console.log(dna);

//1) Use the .trim() method to remove the leading and trailing whitespace, then print the result.

dna = dna.trim();
console.log(dna);

//2) Change all of the letters in the dna string to UPPERCASE, then print the result.
dna = dna.toUpperCase();
console.log(dna);

//3) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.

console.log(dna);

//Part Two Section Two

let dnaTwo = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//1) Replace the gene "GCT" with "AGG", and then print the altered strand.
dnaTwo = dnaTwo.replace("GCT", "AGG");
console.log(dnaTwo);
//2) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".
findCAT = dnaTwo.indexOf("CAT");
console.log(findCAT);
findCAT = true
if (findCAT === true) {
    console.log("CAT gene found.");
} else {
    console.log("CAT gene NOT found.");
}

//3) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
geneSetFive = dnaTwo.slice(16, 19);
console.log(geneSetFive);
//4) Use a template literal to print, "The DNA strand is ___ characters long."
dnaStrandLength = dnaTwo.length;
console.log(dnaStrandLength);
console.log(`The DNA strand is ${dnaStrandLength} characters long.`);
//5) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
funWordOne = dnaTwo.slice(4, 7);
console.log(funWordOne);
funWordOne = funWordOne.toLowerCase();
console.log(funWordOne);
funWordTwo = dnaTwo.slice(40, 43);
console.log(funWordTwo);
funWordTwo = funWordTwo.toLowerCase();
console.log(funWordTwo);
console.log(`${funWordOne}o ${funWordTwo}`);