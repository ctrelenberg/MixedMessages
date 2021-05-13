const movies = [
    'Star Wars',
    'Lord of the Rings',
    'Dune',
    'Pulp Fiction',
    'No Country for Old Men',
    'Blade Runner',
    'Skyfall',
    'Akira',
    'The Matrix',
    'The Room'
]

const songs = [
    'Smells Like Teen Spirit',
    'Billie Jean',
    'Bohemian Rhapsody',
    'Hotel California',
    'Stairway to Heaven',
    'Jonny B Good',
    'Never Gonna Give You Up',
    'Dancing Queen',
    'Gimme Shelter',
    'Wonderwall'
]

const books = [
    'The Catcher in the Rye',
    '1984',
    'The Great Gatsby',
    'The Girl With the Dragon Tattoo',
    'Harry Potter and the Goblet of Fire',
    'To Kill a Mockingbird',
    'Pride and Prejudice',
    'Alice\'s Adventures in Wonderland',
    'War and Peace',
    'Fahrenheit 451'
]

function getRandomElement(array) {
    let length = array.length;
    let index = Math.floor(Math.random() * length);
    return array[index];
}

function generateString() {
    let movie = getRandomElement(movies);
    let song = getRandomElement(songs);
    let book = getRandomElement(books);
    let str = `Your favourite movie is ${movie},\nfavourite song is ${song},\nand favourite book is ${book}.`;
    return str;
}

function greet() {
    console.log();
    console.log('I am the Great Aidem!');
    console.log('I shall predict your desires.');
    console.log();
}

function predict() {
    console.log(generateString());
    console.log();
}

function displayMessage() {
    greet();
    predict();
}

displayMessage();
