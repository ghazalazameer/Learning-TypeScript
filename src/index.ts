// tsc command to compile: tsc sample.ts
// typescript compiler will generate a sample.js file

// const a = 4444;
// console.log(a);

// -w watch mode to watch for changes and compile
// tsc sample.ts -w

// let a: string = "{565}";
// let xyz: number = 4444;
// let check: boolean;

// any type can be assigned to any type
// let b: any = 4;

//  let abc = <string> "ExWhyZed";

// union type
// let unionType: number | string;

// const func = (a: number, b: number) => {
//   //   return a + b;
//   return String(a + b);
// };

// const func = (a: number, b: number): string => {
//   return String(a + b);
// };

// type keyword is used to create a type alias
// interface keyword is used to create an interface

// type User = {
//   name: string;
//   age: number;
// };

// const user: User = {
//   name: "John",
//   age: 25,
// };

// Array of objects
// const arr: Array<string | number> = ["John", 25, "Doe", 30];

// const arr1: string[] = ["John", "Doe"];
// const arr2: Array<string> = ["John", "Doe"];

// const arr3: [string, number] = ["John", 25];

//tuple
// how to define a tuple
// we have to define the type of each element in the tuple
// we have to define the exact number of elements in the tuple
// const arr: [string, number] = ["John", 25];

//object
// const user: {
//   name: string;
//   age: number;
// } = {
//   name: "John",
//   age: 25,
// };

// type Obj = {
//   height: number;
//   weight: number;
//   gender?: boolean;
// };
// const obj: Obj = {
//   gender: true,
//   height: 5.9,
//   weight: 70,
// };

// const obj1: Obj = {
//   height: 5.6,
//   weight: 55,
//   gender: false,
// };

// Interface : Interface is a way to define a custom type in TypeScript
// Interface is used to define the structure of an object
// Interface is used to define the structure of a function
// Interface is used to define the structure of a class
// Interface is used to define the structure of an array
// Interface is used to define the structure of a tuple
// Interface is used to define the structure of a union type
// Interface can be extended

// interface User {
//   name: string;
//   age: number;
// }

// interface NewUser extends User {}

// const newY: NewUser = {
//   name: "John",
//   age: 25,
// };

// adding a new property to the interface
// interface AdvancedUser extends User {
//     email: string;
//     address?: string;
//     isAdmin: boolean;
// }

// const advancedUser: AdvancedUser = {
//     name: "John",
//     age: 25,
//     email: "john@example.com",
//     isAdmin: true,
// };

// Function
// const add = (a: number, b: number): number => {
//     return a + b;
// };
// Advanced Functions

// Function Overloading
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: any, b: any): any {
//     return a + b;
// }

// Optional Parameters
// function greet(name: string, age?: number): string {
//     if (age) {
//         return `Hello ${name}, you are ${age} years old.`;
//     } else {
//         return `Hello ${name}.`;
//     }
// }

// Default Parameters
// function multiply(a: number, b: number = 1): number {
//     return a * b;
// }

// Rest Parameters
// function sum(...numbers: number[]): number {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
// }

// Arrow Functions
// const square = (x: number): number => x * x;

// Higher-Order Functions
// function multiplyBy(factor: number): (num: number) => number {
//     return (num: number) => num * factor;
// }

// Callback Functions
// function fetchData(callback: (data: string) => void): void {
    // Simulating asynchronous data fetching
//     setTimeout(() => {
//         const data = "Some data";
//         callback(data);
//     }, 1000);
// }

// Promises
// function fetchDataAsync(): Promise<string> {
//     return new Promise((resolve, reject) => {
//         // Simulating asynchronous data fetching
//         setTimeout(() => {
//             const data = "Some data";
//             resolve(data);
//         }, 1000);
//     });
// }

// Async/Await
// async function fetchDataAsyncAwait(): Promise<string> {
//     return new Promise((resolve, reject) => {
//         // Simulating asynchronous data fetching
//         setTimeout(() => {
//             const data = "Some data";
//             resolve(data);
//         }, 1000);
//     });
// }

// Generics
// function identity<T>(arg: T): T {
//     return arg;
// }

// Usage examples
// const result1 = add(5, 10);
// const result2 = add("Hello", "World");
// const greeting = greet("John", 25);
// const product = multiply(5);
// const total = sum(1, 2, 3, 4, 5);
// const squared = square(3);
// const multiplyByTwo = multiplyBy(2);
// const fetchDataCallback = (data: string) => console.log(data);
// fetchData(fetchDataCallback);
// fetchDataAsync().then((data) => console.log(data));
// (async () => {
//     const data = await fetchDataAsyncAwait();
//     console.log(data);
// })();
// const value = identity("Hello");

// console.log(result1);
// console.log(result2);
// console.log(greeting);
// console.log(product);
// console.log(total);
// console.log(squared);
// console.log(multiplyByTwo(5));
// console.log(value);

// Data Types in TypeScript
// 1. Boolean
let isTrue: boolean = true;
let isFalse: boolean = false;

// 2. Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// 3. String
let fullName: string = "John Doe";
let age: number = 25;
let sentence: string = `My name is ${fullName} and I am ${age} years old.`;

// 4. Array
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["John", "Jane", "Joe"];

// 5. Tuple
let tuple: [string, number] = ["John", 25];

// 6. Enum
enum Color {
    Red,
    Green,
    Blue,
}
let color: Color = Color.Green;

// 7. Any
let anyValue: any = 5;
anyValue = "Hello";
anyValue = true;

// 8. Void
function sayHello(): void {
    console.log("Hello!");
}

// 9. Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// 10. Never
function throwError(message: string): never {
    throw new Error(message);
}

// 11. Object
let obj: object = { name: "John", age: 25 };

// 12. Type Annotations
let a: number;
let b: string;
let c: boolean;
let d: any;
let e: number[] = [1, 2, 3];
let f: [string, number] = ["John", 25];
let g: object = { name: "John", age: 25 };

// 13. Type Inference
let x = 5; // TypeScript infers x as number
let y = "Hello"; // TypeScript infers y as string

// 14. Union Types
let union: number | string = 5;
union = "Hello";

// 15. Type Aliases
type Point = {
    x: number;
    y: number;
};
let point: Point = { x: 0, y: 0 };

// 16. Interfaces
interface User {
    name: string;
    age: number;
}
let user: User = { name: "John", age: 25 };

// 17. Function Overloading
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    } else {
        throw new Error("Invalid arguments");
    }
}

// 18. Optional Parameters
function greet(name: string, age?: number): string {
    if (age) {
        return `Hello, ${name}! You are ${age} years old.`;
    } else {
        return `Hello, ${name}!`;
    }
}

// 19. Default Parameters
function multiply(a: number, b: number = 1): number {
    return a * b;
}

// 20. Rest Parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

// 21. Arrow Functions
const square = (x: number): number => x * x;

// 22. Higher-Order Functions
function multiplyBy(factor: number): (num: number) => number {
    return (num: number) => num * factor;
}

// 23. Callback Functions
function fetchData(callback: (data: string) => void): void {
    // Simulating asynchronous data fetching
    setTimeout(() => {
        const data = "Data fetched successfully";
        callback(data);
    }, 1000);
}

// 24. Promises
function fetchDataAsync(): Promise<string> {
    return new Promise((resolve, reject) => {
        // Simulating asynchronous data fetching
        setTimeout(() => {
            const data = "Data fetched successfully";
            resolve(data);
        }, 1000);
    });
}

// 25. Async/Await
async function fetchDataAsyncAwait(): Promise<string> {
    return new Promise((resolve, reject) => {
        // Simulating asynchronous data fetching
        setTimeout(() => {
            const data = "Data fetched successfully";
            resolve(data);
        }, 1000);
    });
}

// 26. Generics
function identity<T>(arg: T): T {
    return arg;
}

// Usage examples
const result1 = add(5, 10);
const result2 = add("Hello", "World");
const greeting = greet("John", 25);
const product = multiply(5);
const total = sum(1, 2, 3, 4, 5);
const squared = square(3);
const multiplyByTwo = multiplyBy(2);
const fetchDataCallback = (data: string) => console.log(data);
fetchData(fetchDataCallback);
fetchDataAsync().then((data) => console.log(data));
(async () => {
    const data = await fetchDataAsyncAwait();
    console.log(data);
})();
const value = identity("Hello");

console.log(result1);
console.log(result2);
console.log(greeting);
console.log(product);
console.log(total);
console.log(squared);
console.log(multiplyByTwo(5));
console.log(value);

// 18. Type Guards
// Type guards are a way to narrow down the type of a variable within a block of code. They allow you to perform type-specific operations based on the type of the variable.

// 19. Type Assertions
// Type assertions allow you to tell the TypeScript compiler that you know more about the type of a value than it does. They are a way to override the default type inference behavior.

// 20. Declaration Merging
// Declaration merging is a feature of TypeScript that allows you to combine multiple declarations of the same entity into a single definition. It is commonly used with interfaces and namespaces.


// interface Obj {
//   height: number;
//   weight: number;
//   gender?: boolean;
// }

// type FuncType = (n: number, m: number) => void;

// interface NewObj extends Obj {
//   scolar: boolean;
//   func: FuncType;
// }

// const gigi: NewObj = {
//   height: 3434,
//   weight: 3434,
//   scolar: true,
//   func: (n, m) => {
//     console.log(n * m);
//   },
// };

// const kendal: NewObj = {
//   height: 43434,
//   scolar: true,
//   weight: 545,
//   func: (n, m) => {
//     console.log(n * m);
//   },
// };

// kendal.func(20, 10);

// const obj: Obj = {
//   gender: true,
//   height: 3434,
//   weight: 34,
// };

// const obj2: Obj = {
//   gender: false,
//   height: 4434,
//   weight: 94,
// };

// const obj3: Obj = {
//   height: 4434,
//   weight: 94,
// };

// ----------------------------------------

// type FuncType = (n: number, m: number, l?: number) => number;

// // Optional Parameter
// const func: FuncType = (n, m, l) => {
//   if (typeof l === "undefined") return n * m;

//   return n * m * l;
// };

// func(25, 23);

// // Default Parameter
// type FuncType = (n: number, m: number, l?: number) => number;
// const func: FuncType = (n, m, l = 20) => {
//   return n * m * l;
// };

// func(25, 23);

// // Rest Operator
// type FuncType = (...m: number[]) => number[];
// const func: FuncType = (...m) => {
//   return m;
// };
// func(25, 23, 34, 6, 67, 8, 9);

// function lol(n:number):number{
//     return 45
// }

// function with Obj

// interface Product {
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
//   readonly id: string;
// }

// type GetDataType = (product: Product) => void;

// const getData: GetDataType = (product) => {
//   console.log(product);
// };

// const productOne: Product = {☺
//   name: "Macbook",
//   stock: 46,
//   price: 999999,
//   photo: "samplephotourl",
//   id: "asdnasjdasjkdas",
// };

// getData(productOne);

// Never Type

// const errorHandler = (): never => {
//   throw new Error();
// };

// --------------------------------------

// classes

// class Player {
//   public readonly id: string;
//   constructor(
//     private height: number,
//     public weight: number,
//     protected power: number
//   ) {
//     this.id = String(Math.random() * 100);
//   }

//   get getMyHeight(): number {
//     return this.height;
//   }

//   set changeHeight(val: number) {
//     this.height = val;
//   }
// }

// const abhi = new Player(100, 150, 23);

// console.log("Heigfht", abhi.getMyHeight);
// abhi.changeHeight = 500;
// console.log("Heigfht", abhi.getMyHeight);

// class Player2 extends Player {
//   special: boolean;
//   constructor(height: number, weight: number, power: number, special: boolean) {
//     super(height, weight, power);
//     this.special = special;
//   }
//   getMyPower = () => this.power;
// }

// const abhi = new Player2(100, 150, 23, true);
// console.log("Weight", abhi.weight);
// console.log("Height", abhi.getMyHeight());
// console.log("Power", abhi.getMyPower());

// interface ProductType {
//   name: string;
//   price: number;
//   stock: number;
//   offer?: boolean;
// }

// interface GiveId {
//   getId: () => string;
// }

// class Product implements ProductType, GiveId {
//   private id: string = String(Math.random() * 1000);
//   constructor(
//     public name: string,
//     public price: number,
//     public stock: number
//   ) {}
//   getId = () => this.id;
// }

// const product1 = new Product("Macbook", 2000, 20);

// ---------------------------------------------

// Type Assertion

// const btn = document.getElementById("btn")!;
// const btn = document.getElementById("btn") as HTMLElement;
// const btn = <HTMLElement>document.getElementById("btn");
// btn.onclick;

// const img = document.getElementById("myimg") as HTMLImageElement;

// const img = document.querySelector("img")!
// img.src

// const form = document.getElementById("myform") as HTMLFormElement;
// const myinput = document.querySelector("form > input") as HTMLInputElement;

// form.onsubmit = (e: SubmitEvent) => {
//   e.preventDefault();
//   const h2 = document.createElement("h2");
//   const body = document.querySelector("body")!;
//   const value = Number(myinput.value);

//   h2.textContent = String(value + 20);
//   body.append(h2);
// };

// Keyof & Index Signature

// interface Person {
//     // [key: string]: string;
//   name: string;
//   email: string;
// }

// const myobj: Person = {
//   name: "Abhi",
//   email: "abhI@gmail.com",
// };

// let key="name";

// myobj[key as keyof typeof myobj]

// const getName = (): string => {
//   return myobj["name"];
// };
// const getEmail = (): string => {
//   return myobj["email"];
// };

// const getData = (key: keyof Person ): string => {
//   return myobj[key];
// };

// getData("name")

// --------------------------------------

// Type Utility

// Partial<Type>
// Required<Type>
// Readonly<Type>
// Record<Keys, Type>
// Pick<Type, Keys>
// Omit<Type, Keys>
// Exclude<Type, ExcludedUnion>
// Extract<Type, Union>
// NonNullable<Type>
// Parameters<Type>
// ConstructorParameters<Type>
// ReturnType<Type>
// InstanceType<Type>

// Partial<Type>

// type User ={
//     name:string,
//     email:string
// }
// type User2 = Partial<User>

// Required<Type> - opposite of partial
// type User ={
//     name?:string,
//     email:string
// }
// const user: Required<User>={
//     name:"abhi",
//     email:"abhi@gmail.vom"
// }

// Readonly<Type> - makes every property readonly
// type User ={
//     name:string,
//     email:string
// }
// const user: Readonly<User> ={
//     name:"abhi",
//     email:"abhi@gmail.vom"
// }

// Record<Keys, Type>

// type User = {
//   name: string;
//   email: string;
// };

// type User2 = Record<"name"|"email"|"gender",string>

// Example

// interface UserInfo {
//   age: number;
// }

// type UserName = "john" | "levi" | "elon" | "jack";

// const users: Record<UserName, UserInfo> = {
//   john: { age: 34 },
//   levi: { age: 34 },
//   elon: { age: 34 },
//   jack: { age: 34 },
// };

// Pick<Type, Keys>
// interface OrderInfo {
//   readonly id: string;
//   user: string;
//   city: string;
//   state: string;
//   country: string;
//   status: string;
// }
// type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;

// Omit<Type, Keys>
// interface ShippingInfo {
//   city: string;
//   state: string;
//   country: string;
// }

// type Random = Omit<ShippingInfo,"country">

// Exclude<Type, ExcludedUnion>
// type MyUnion = string | number | boolean
// type Random = Exclude<MyUnion , boolean>

// Extract<Type, Union>
// type MyUnion = string | number | boolean
// type Random = Extract<MyUnion , boolean>

// NonNullable<Type>
// type MyUnion = string | number | boolean | null | undefined
// type Random = NonNullable<MyUnion>
// type Random2 = Exclude<MyUnion,undefined| null>

// Parameters<Type>
// const myfunc = (a: number, b: string) => {
//   console.log(a + b);
// };
// type Random = Parameters<typeof myfunc>

// ConstructorParameters<Type>
// class SampleClass {
//   constructor(public s: string, public t: string) {}
// }
// type Random = ConstructorParameters<typeof SampleClass>

// ReturnType<Type>
// const myfunc = (a: number, b: string):string => {
//   return a + b;
// };
// type FuncType = ReturnType< typeof myfunc>

// InstanceType<Type>
// class SampleClass {
//   constructor(public s: string, public t: string) {}
// }
// type Random = InstanceType<typeof SampleClass>

// const user:Random ={
//     s:"44",
//     t:"ssds"
// }

// -----------------------------------------------------------------

// Generics

// const func = <T>(n: T): T => {

//   return n;
// };

// const ans = func(20);
// const ans2 = func("20");
// const ans3 = func(true);

// type Person = {
//   name: string;
//   age: number;
// };

// const func = <T>(n: T): T => {
//   return n;
// };

// const person1: Person = {
//   name: "Abhi",
//   age: 109,
// };

// const ans = func<Person>(person1);

// const func = <T, U>(n: T, o: U): { n:T, o:U } => {
//   return { n, o };
// };

// const ans = func<number,string>(20,"Lol");

// type Person = {
//   name: string;
//   age: number;
// };

// type Person2 = {
//   name: string;
//   age: number;
//   email: string;
// };

// const user: Person = {
//   name: "abhi",
//   age: 109,
// };

// const user2: Person2 = {
//   name: "abhi",
//   age: 109,
//   email: "asd@gmail.com",
// };

// const func = <T, U extends T>(n: T, o: U): { n: T; o: U } => {
//   return { n, o };
// };

// const ans = func<Person, Person2>(user, user2);

// type Person = {
//   name: string;
//   age: number;
// };

// const users: Person[] = [
//   {
//     name: "abhi",
//     age: 109,
//   },
//   {
//     name: "Nahar",
//     age: 109,
//   },
//   {
//     name: "Levi",
//     age: 52,
//   },

//   {
//     name: "Random",
//     age: 2,
//   },
// ];

// const filterByPeoples = <T, U extends keyof T>(
//   arr: T[],
//   property: U,
//   value: T[U]
// ): T[] => {
//   return arr.filter((item) => item[property] === value);
// };

// const filteredPeopleByName = filterByPeoples(users, "name", "Nahar");
// const filteredPeopleByAge = filterByPeoples(users, "age", 109);
// console.log(filteredPeopleByAge);