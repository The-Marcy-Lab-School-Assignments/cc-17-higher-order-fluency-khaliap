// Num 1

 const pluralized = array => {
    let newAray = array.map(word => word + `s`);
    return newAray;
};
console.log(pluralized(['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']));

// Num 2
const upperCase = array =>  array.map(word => word[0].toUpperCase() + word.substr(1));

 
console.log(upperCase(['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']));

// Num 3 

const longWords = array =>  array.filter( words => words.length > 3);

console.log(longWords(['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']));

// Num 4

const shortWords = array =>  array.filter( word => word.length < 5);

console.log(shortWords(['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']));

// Num 5

const oddLength = array => array.filter(animal => animal.length % 2 !== 0);

console.log(oddLength(['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']));

// Num 6
const longToShort = array => array.sort((a,b) => a.length - b.length);

console.log(longToShort(['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']));

// Num 7

const sum = array => array.reduce((accum, value) => accum + value);
console.log(sum([22, 15, 1114, 416, 37, 4]));

