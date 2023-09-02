type employee{
    name:string
}

// inteface
type student ={
    name: string;
    age:number
}

type books ={
    author: string | null, // union type
} & student

interface author extends books{

}

// In operator
// ? The in operator is used to find if a property is in the specified object. It returns true if the property belongs to the object. Otherwise, it returns false

let car = ['maruthi', 'hundai', 'benz', 'jaguare']
console.log('hundai' in car)

interface Employee {
work: () => string;
}

interface Manager {
manage: () => string;
}

// intersection types
type Supervisor = Employee & Manager;

// john can both work and manage
let john: Supervisor;

// Namesapce 
namespace MyNamespace {
  export interface Person {
    name: string;
    age: number;
  }

  export function sayHello(person: Person) {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
  }
}

// Using the namespace
const person: MyNamespace.Person = { name: "John", age: 30 };
MyNamespace.sayHello(person);


// Generic funtion
//? It is able to create components that can work with a variety of data types rather than a single data type. Also, it provides type safety without compromising the performance, or productivity

function identity<T>(arg: T): T {
return arg;
}
let output1 = identity<string>("edureka");
let output2 = identity<number>( 117 );
console.log(output1);
console.log(output2);

function employee<T>(arg: T): T {
    return arg
}
let resul = employee<string>("name");
let sre = employee<number>(20)
let bol =employee<boolean>(true)
    
