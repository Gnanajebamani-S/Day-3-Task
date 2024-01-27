//Question 1 : how to compare two json have the same properties without order

function areObjectsEqual(obj1, obj2) {
    const stringifiedObj1 = JSON.stringify(obj1);
    const stringifiedObj2 = JSON.stringify(obj2);
    return stringifiedObj1 === stringifiedObj2;
}
 
let obj1 = {
    name: "Person1",
    age: 5,
    
};
 
let obj2 = {
    age: 5,
    name: "Person1",
};
//Method 1 : with the help 0f (_.isEqual)  from Lodash.
 console.log(_.isEqual(obj1, obj2));
//Method 2 : JSON.stringify() method
console.log(areObjectsEqual(obj1, obj2));
//Method 3 : using the deep-equal
let deepEqual = require('deep-equal');
console.log(deepEqual(person1, person2)); 
//Method 4 : Framework-specific methods
const assert = require('assert');
console.log(assert.deepStrictEqual(person1, person2)); 
//Method 5 : Angular: angular.equals(obj1, obj2)
console.log(angular.equals(person1, person2));

