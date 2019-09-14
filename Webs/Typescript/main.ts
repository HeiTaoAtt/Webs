export {}
let message = 'Welcome back';
console.log(message);

// let
let sum;
sum = 0;
sum = true;
    // would NOT throw an ERROR because DEFAULT is UNDEFINED TYPE

let sum1 = 0;
    // sum1 = true; 
    // WOULD throw an ERROR because can NOT CHANGE TYPE

let multiType: number | boolean;
multiType = 20;
multiType = true;
    // would NOT throw an ERROR because it is number | boolean TYPE (UNION TYPE)

let anyType: any;
anyType = 20;
anyType = true;
    // would NOT throw an ERROR because it is ANY TYPE (UNION TYPE)


// const
const title = 'tutorial';

//


// Basic value type
let isBeginner: boolean = true;
let total: number = 0;

// String value type
let name: string = 'HeiTao';
let sentence: string = `My name is ${name}
I am a beginner in ts`;

console.log(sentence);

// Special value type
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

// Array value type (an Array with type Number)
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

// Tuple value type (contains a String and a Number; order matter)
let person1: [String, number] = ['Chirs', 22];

// Enum value type (Numeric values) (Begin with value '0' -> Red=0, Green=1, Blue=2 in Defalut)
enum color {Red = 5, Green, Blue};
    // Now, Green = 5+1 = 6, Blue = 5+2 = 7; NOT good to ASSIGN Red

let c: color = color.Green;
console.log(c);

// Dynamic value type (type 'any') (good for Migrate from js to ts)
let randomValue: any = 10;
randomValue = true;
randomValue = 'HeiTao';

let myVariable: any = 10;
    // would NOT throw an ERROR on follow methods because of type 'any'
let myVariable2: unknown = 10;
    // WOULD throw an ERROR on follow methods because type is 'UNKNOWN'
console.log(myVariable.name);
myVariable();
myVariable.toUppercase();

//


// Function

    // function named 'add', 
    // has 2 parameters 'num1' and 'num2' with type 'number', 
    // returns value with type 'number',
function add(num1: number, num2: number = 10): number {
    // 'num2 ?: number' to set num2 exists or not; 'num2: number = 10' to set num2=10;
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5);


    // function name is hasName; 
    // has parameter 'obj' with type 'any'; 
    // going to return an 'obj' which contains the 'name' property as a 'string';
function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if (hasName(myVariable)) {
    console.log(myVariable.name);
}
(myVariable as string).toUpperCase();

//


// Interface
interface Person {
    firstName: string;
    lastName?: string;
}

   function fullName(person: Person) {
// function fullName(person: {firstName: string, lastName: string}) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne',
};

fullName(p);

//


// class
// Access Modifiers
    // public: accesibility for FREE
    // private: accesibility only WITHIN CLASS
    // protected: accesibility WITHIN CLASS and DERIVED CLASS

class Employee {
    // 1. Property
    public employeeName: string;

    // 2. Constructor
    constructor(name: string) {
        this.employeeName = name;
    }

    // 3. Method
    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);     // returns Vishwas
emp1.greet();                       // returns `Good Morning Vishwas`

// Inheritance
class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }
    delegateWork() {
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Manager('Bruce');      
m1.delegateWork();                  // returns `Manager delegating tasks`
m1.greet();                         // returns `Good Morning Bruce`
console.log(m1.employeeName);       // returns Bruce

//
