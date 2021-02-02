
const numbers = [2,4,5,7,8];

// function square(element){
//     return element * element;
// }

// numbers.map(function(element,index,array){
//     console.log(element, index, array);
// })

// const result = numbers.map(function(element){  //first way
//     return element*element;
// })

//const result = numbers.map(element => element*element);  // second way
//console.log(result);

const even = numbers.filter(element => element%2==0); //filter korbo evabe
const odd = numbers.filter(element => element%2!=0);
const isThere = numbers.find(element => element>5);

console.log(isThere);
console.log(even);
console.log(odd);
