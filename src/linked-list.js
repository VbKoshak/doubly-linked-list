const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        if (this._tail) {
            this._tail.next = new Node(data, this._tail, null);
            this._tail = this._tail.next;
        } else {
            this._head = new Node(data, null, null);
            this._tail = this._head;
        }

        this.length++;
        return this;
    }

    head() {
        return (this._head) ? this._head.data : null;
    }

    tail() {
        return (this._tail) ? this._tail.data : null;
    }

    at(index) {
        let current = this._head;
        for (let i = 0; i < index; i++){
            current = current.next;
        }
        return current.data;
    }

    insertAt(index, data) {
        let current  = this._head;
        for (let i = 0; i < index; i++){
            current = current.next;
        }
        let node = new Node(data,(current && current.prev) ? current.prev : null,current ? current : null);
        if (current && current.prev) {
            current.prev.next = node;
            current.prev = node;
        } else {
            if (current) {
                current.prev = node;
            } else {
                current = node;
            }
        }
        this.length++;
        return this;
    }

    isEmpty() {
        return (this.length === 0) ? true : false;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let current  = this._head;
        for (let i = 0; i < index; i++){
            current = current.next;
        }

        if(current.prev) current.prev.next = current.next;
        if(current.next) current.next.prev = current.prev;

        this.length--;
        return this;
    }

    reverse() {
        let current = this._head;
        let temp;
        do{
            temp = current.next;
            current.next = current.prev;
            current.prev = temp;
            current = current.prev;
        }while (current);
        temp = this._head;
        this._head = this._tail;
        this._tail = temp;
        return this;
    }

    indexOf(data) {
        let current = this._head;
        let index = 0;
        while (current){
            if (current.data === data){
                return index;
            } else {
                index++;
                current = current.next;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;