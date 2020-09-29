import Stack from './dataStructures/Stack.js';
import Queue from './dataStructures/Queue.js';
import Deque from './dataStructures/Deque.js';
import LinkedList from './dataStructures/LinkedList.js';

// STACK : DECIMAL TO BINARY
// function decimalToBinary(decimalNumber) {
//     const reminderStack = new Stack();
//     let number = decimalNumber;
//     let reminder;
//     let binaryString = '';

//     while (number > 0) {
//         reminder = Math.floor(number % 2);
//         reminderStack.push(reminder);
//         number = Math.floor(number / 2);
//     }

//     while (!reminderStack.isEmpty()) {
//         binaryString += reminderStack.pop().toString();
//     }

//     return binaryString;
// }
// console.log(decimalToBinary(10000));



// QUEUE : HOT PATATO GAME
// function hotPatato(elementsList, num) {
//     const queue = new Queue();
//     const eleminatedList = [];

//     for (let i = 0; i < elementsList.length; i++) {
//         queue.enqueue(elementsList[i]);
//     }

//     while (queue.size() > 1) {
//         for (let i = 0; i < num; i++) {
//             queue.enqueue(queue.dequeue());
//         }
//         eleminatedList.push(queue.dequeue());
//     }

//     return {
//         eleminated: elementsList,
//         winner: queue.dequeue(),
//     };
// }
// const names = ['John', 'Jack', 'Camilia', 'Ingrid', 'Carl'];
// const result = hotPatato(names, 10);
// result.eleminated.forEach(name => {
//     console.log(`${name} was eliminated from the Hot patato game.`);
// });
// console.log(`The winner is ${result.winner}`);



// DEQUE : PALINDROME CHECKER

// function palindromeChecker(aString) {
//     if (aString === undefined || aString === null ||
//     (aString !== null && aString.length === 0)) {
//         return false;
//     }
//     const deque = new Deque();
//     const lowerString = aString.toLocaleLowerCase().split(' ').join('');

//     let isEqual = true;
//     let firstChar, lastChar;

//     // Fill the deque with cleaned aString
//     for (let i = 0; i < lowerString.length; i++) {
//         deque.addBack(lowerString.charAt(i));
//     }

//     while (deque.size() > 1 && isEqual) {
//         firstChar = deque.removeFront();
//         lastChar = deque.removeBack();

//         if (firstChar !== lastChar) {
//             isEqual = false;
//         }
//     }

//     return isEqual;
// }
// console.log('a', palindromeChecker('a')); // true
// console.log('Colin', palindromeChecker('Colin')); // false
// console.log('rotor', palindromeChecker('rotor')); // false
// console.log('aa', palindromeChecker('aa')); //true

const list = new LinkedList();
list.push(15);
list.push(10);
console.log(list);
