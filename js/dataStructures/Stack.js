export default class Stack {
    constructor() {
        this._count = 0;
        this._items = {};
    }

    push(element) {
        this._items[this._count] = element;
        this._count++;
    }

    size() {
        return this._count;
    }

    isEmpty() {
        return this._count === 0;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        this._count--;
        const poppedItem = this._items[this._count];
        delete this._items[this._count];
        return poppedItem;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return _items[this._count - 1];
    }

    clear() {
        this._items = {};
        this._count = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }

        let objString = `${this._items[0]}`;
        for (let i=1; i < this._count; i++) {
            objString = `${objString}, ${this._items[i]}`;
        }
        return objString;
    }
}
