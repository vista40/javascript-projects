function makeLine(size) {
    let line = (' ');
    for (let i = 0; i < size; i++) {
    line += '#';
    }
    return line
}
console.log(makeLine(5));

function makeSquare(size) {
    let line = (' ');
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    let square = ('');
    for (let i = 0; i < size; i++) {
        square += line + "\n";
    }
    return square.trimEnd();
}
console.log(makeSquare(5));    

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width)); 
}
   let rectangleHeight = '';
   rectangleHeight = (makeSquare(height));
   return rectangleHeight
}
   console.log(makeRectangle(3, 5));


