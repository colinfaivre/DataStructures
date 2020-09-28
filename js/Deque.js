class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.element[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    }

    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }

    removeFront() {
        if (this.isEmpty()) {
            return undefined;
        }

        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }

        this.count--;
        const removedItem = this.items[this.count];
        delete this.items[this.count];
        return removedItem;
    }

    peekFront() {
        return this.items[this.lowestCount];
    }

    peekBack() {
        return this.items[this.count];
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    size() {
        return this.count - this.lowestCount;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }

        let objString = `${this.items[this.lowestCount]}`;

        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }

        return objString;
    }
}

// Palindrome checker
function palindromeChecker(aString) {
    if (aString === undefined || aString === null ||
    (aString !== null && aString.length === 0)) {
        return false;
    }
    const deque = new Deque();
    const lowerString = aString.toLocaleLowerCase().split(' ').join('');

    let isEqual = true;
    let firstChar, lastChar;

    // Fill the deque with cleaned aString
    for (let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i));
    }

    while (deque.size() > 1 && isEqual) {
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();

        if (firstChar !== lastChar) {
            isEqual = false;
        }
    }

    return isEqual;
}

console.log('a', palindromeChecker('a')); // true
console.log('Colin', palindromeChecker('Colin')); // false
console.log('rotor', palindromeChecker('rotor')); // false
console.log('aa', palindromeChecker('aa')); //true

