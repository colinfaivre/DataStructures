import { defaultCompare, Compare } from './util.js';

const swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];

export default class MinHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.heap = [];
    }

    getLeftIndex(index) {
        return 2 * index + 1;
    }

    getRightIndex(index) {
        return 2 * index + 2;
    }

    getParentIndex(index) {
        if(index === 0) {
            return undefined;
        }

        return Math.floor((index - 1) / 2);
    }

    insert(value) {
        if(value != null) {
            this.heap.push(value);
            this.siftUp(this.heap.length - 1);

            return true;
        }

        return false;
    }

    siftUp(index) {
        let parent = this.getParentIndex(index);

        while(
            index > 0 &&
            this.compareFn(this.heap[parent], this.heap[index]) > Compare.GREATER_THAN
        ) {
            swap(this.heap, parent, index);
            index = parent;
            parent = this.getParentIndex(index);
            console.log('swapped');
        }
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    findMinimum() {
        return this.isEmpty() ? undefined : this.heap[0];
    }
    
}
