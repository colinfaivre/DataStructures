import Stack from './dataStructures/Stack.js';
import Queue from './dataStructures/Queue.js';
import Deque from './dataStructures/Deque.js';
import LinkedList from './dataStructures/LinkedList.js';
import SortedLinkedList from './dataStructures/SortedLinkedList.js';
import DoublyLinkedList from './dataStructures/DoublyLinkedList.js';
import CircularLinkedList from './dataStructures/CircularLinkedList.js';
import Set from './dataStructures/Set.js';
import Dictionary from './dataStructures/Dictionary.js';
import HashTable from './dataStructures/HashTable.js';

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

// const list = new LinkedList();
// list.push(15);
// list.push(10);
// list.push(10);
// list.push(100);
// list.insert(500, 2);
// list.remove(10);
// console.log(list.getHead());

// console.log(list.toString());



// SET

// const setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
// setA.add(4);
// setA.add(5);

// const setB = new Set();
// setB.add(4);
// setB.add(5);

// console.log(setB.isSubsetOf(setA));



// DICTIONARY

// const dictionary = new Dictionary();
// dictionary.set('Gandalf', 'gandalf@email.com');
// dictionary.set('John', 'john@email.com');
// dictionary.set('Tyrion', 'tyrion@email.com');

// console.log(dictionary.hasKey('Gandalf'));
// console.log(dictionary.keys());
// console.log(dictionary.get('Gandalf'));

// dictionary.remove('John');
// console.log(dictionary.keyValues());

// dictionary.forEach((k, v) => {
//     console.log('forEach: ', `key: ${k}, value: ${v}`);
// })



// HASH TABLE

// const hash = new HashTable();
// hash.put('Gandalf', 'gandalf@email.com');
// hash.put('John', 'johnsnow@email.com');
// hash.put('Tyrion', 'tyrion@email.com');

// console.log(hash.hashCode('Gandalf') + ' - Gandalf');
// console.log(hash.get('John'));



// RECURSION

function factorialIterative(number) {
    if (number < 0) return undefined;

    let total = 1;
    for (let n = number; n > 1; n--) {
        total *= n;
    }

    return total;
}

console.log(factorialIterative(10));

function factorial(n) {
    if (n === 1 || n === 0) {
        return 1;
    }

    return n * factorial(n - 1)
}
console.log(factorial(9));

function fibonacciIterative(n) {
    if (n < 1) return 0;
    if (n <= 2) return 1;

    let fibNMinus2 = 0;
    let fibNMinus1 = 1;
    let fibN = n;

    for (let i = 2; i <= n; i++) {
        fibN = fibNMinus1 + fibNMinus2;
        fibNMinus2 = fibNMinus1;
        fibNMinus1 = fibN;
    }

    return fibN;
}

console.log(fibonacciIterative(9));

function fibonacci(n) {
    if (n < 1) return 0;
    if (n <= 2) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));
