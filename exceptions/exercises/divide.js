function divide(numerator, denominator) {
    if (denominator === 0) {
        throw Error("Attempted to divide by zero.");
    }
    return numerator/denominator;
}

console.log(divide(4, 0));
    /*User enters a number called numerator
    --ask the user for a numerator: "What number will you divide?"
    --the number should be a Number type.
    --The user sees a message that says "Your numerator is: userNumber"
    User enters a second number called denominator
    --ask the user for a denominator: "What number will you divide by?"
    --the number should be a Number type.
    --The user sees a message that says "Your denominator is: userNumber"
    --The two numbers are divided and the result is given to the user. A statement says "Numerator divided by denominator= answer".
}
// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
*/