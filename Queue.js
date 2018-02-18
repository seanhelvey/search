let Node = require('./Node.js')

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(item) {
    if(!this.first) {
      this.last = new Node(item);
      this.first = this.last;
    }
    else {
      this.last.next = new Node(item);
      this.last = this.last.next;
    }
  }

  dequeue(item) {
    if(this.first) {
      let item = this.first.data;
      this.first = this.first.next;
      if(!this.first) { this.last = null; }
      return item;
    }
    return null
  }

  isEmpty() {
    return !this.first
  }
}

module.exports = Queue
