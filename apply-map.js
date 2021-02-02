
const students = [
    {id:12, name:"muhit"},
    {id:13, name:"kawser"},
    {id:14, name:"jubu"},
    {id:15, name:"shihab"}
];

// let actor = [];
// for(let i=0; i<students.length; i++){
//     actor.push(students[i].name);
// }
//console.log(actor);

const names = students.map(student => student.name);
console.log(names);

const ids = students.filter(roll => roll.id>12);
console.log(ids);
