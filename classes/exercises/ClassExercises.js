// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, totalPages, timesCheckedOut, discarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.totalPages = totalPages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;

    }
 
    novelDiscard() {
        let discard = `${this.title} has been checked out over 100 times. Throw it out.`;
        let noDiscard = `${this.title} has not been checked out over 100 times. Keep it.`;
        if (this.timesCheckedOut > 100) {
            this.discarded = "Yes";
            console.log(discard);
        } else {
            console.log(noDiscard);
        }
    }
};

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, totalPages, timesCheckedOut, discarded) {
        super(title, author, copyrightDate, isbn, totalPages, timesCheckedOut, discarded);
    }
    discard(currentYear) {
        let discard = `${this.title} is over 5 years old. Throw it out.`;
        if (currentYear - this.copyrightDate > 5) {
            this.discarded = "Yes";
            console.log(discard);
        }
    }

};


class Novel extends Book {
    constructor(title, author, copyrightDate, ISBN, totalPages, timesCheckedOut, discarded) {
        super(title, author, copyrightDate, ISBN, totalPages, timesCheckedOut, discarded);
        //    this.roar = "loud";
    }   // the book should be thrown out if it has been checked out over 100 times.
};

// Declare the objects for exercises 2 and 3 here:
let pridePrejudice = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, "No");


let topSecret = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No");


// Code exercises 4 & 5 here:

console.log(topSecret);
console.log(topSecret.discard(2024));
console.log(topSecret);
console.log(pridePrejudice);
console.log(pridePrejudice.novelDiscard());
pridePrejudice.timesCheckedOut = 37;
console.log(pridePrejudice); 