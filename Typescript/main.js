"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Welcome back';
console.log(message);
// let
var sum;
sum = 0;
sum = true;
// would NOT throw an ERROR because DEFAULT is UNDEFINED TYPE
var sum1 = 0;
// sum1 = true; 
// WOULD throw an ERROR because can NOT CHANGE TYPE
var multiType;
multiType = 20;
multiType = true;
// would NOT throw an ERROR because it is number | boolean TYPE (UNION TYPE)
var anyType;
anyType = 20;
anyType = true;
// would NOT throw an ERROR because it is ANY TYPE (UNION TYPE)
// const
var title = 'tutorial';
//
// Basic value type
var isBeginner = true;
var total = 0;
// String value type
var name = 'HeiTao';
var sentence = "My name is " + name + "\nI am a beginner in ts";
console.log(sentence);
// Special value type
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// Array value type (an Array with type Number)
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// Tuple value type (contains a String and a Number; order matter)
var person1 = ['Chirs', 22];
// Enum value type (Numeric values) (Begin with value '0' -> Red=0, Green=1, Blue=2 in Defalut)
var color;
(function (color) {
    color[color["Red"] = 5] = "Red";
    color[color["Green"] = 6] = "Green";
    color[color["Blue"] = 7] = "Blue";
})(color || (color = {}));
;
// Now, Green = 5+1 = 6, Blue = 5+2 = 7; NOT good to ASSIGN Red
var c = color.Green;
console.log(c);
// Dynamic value type (type 'any') (good for Migrate from js to ts)
var randomValue = 10;
randomValue = true;
randomValue = 'HeiTao';
var myVariable = 10;
// would NOT throw an ERROR on follow methods because of type 'any'
var myVariable2 = 10;
// WOULD throw an ERROR on follow methods because type is 'UNKNOWN'
console.log(myVariable.name);

//


// Function
// function named 'add', 
// has 2 parameters 'num1' and 'num2' with type 'number', 
// returns value with type 'number',
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
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
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
function fullName(person) {
    // function fullName(person: {firstName: string, lastName: string}) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
//
// class
// Access Modifiers
// public: accesibility for FREE
// private: accesibility only WITHIN CLASS
// protected: accesibility WITHIN CLASS and DERIVED CLASS
var Employee = /** @class */ (function () {
    // 2. Constructor
    function Employee(name) {
        this.employeeName = name;
    }
    // 3. Method
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Vishwas');
console.log(emp1.employeeName); // returns Vishwas
emp1.greet(); // returns `Good Morning Vishwas`
// Inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork(); // returns `Manager delegating tasks`
m1.greet(); // returns `Good Morning Bruce`
console.log(m1.employeeName); // returns Bruce
//
