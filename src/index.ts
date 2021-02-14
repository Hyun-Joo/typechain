class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name:string, age:number, gender?:string){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
// interface Human {
//   name: string; //JS에서는 작동하지 않음
//   gender: string;
//   age: number;
// }

// const person = {
//   name: "Jane",
//   gender: "female",
//   age: 29
// };
const lynn = new Human("Jane", 29);

const sayHi = (person:Human):string => {
  return `Hello ${person.name}, I'm ${person.age} years old, and a ${person.gender}`
}

console.log(sayHi(lynn));

export {}; //bug(?) fix