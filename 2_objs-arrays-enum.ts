// const person : {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: 'Max',
//     age: 30,
//     hobbies :['sport', 'cooking'],
//     role: [2, 'author']
// };
enum Role { ADMIN =5 , READ_ONLY =100, AUTHOR = 'AUTHOR'} ;
const person = {
    name: 'Max',
    age: 30,
    hobbies :['sport', 'cooking'],
    role: Role.ADMIN
};


console.log(person.name);


for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}
