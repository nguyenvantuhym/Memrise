function Queue() {
  this.size = 4;
  this.elements = [];
}
Queue.prototype.enqueue = function(e) {
  if (this.length() < this.getSize()) {
    this.elements.push(e);
  } else {
    console.error('error: cannot enquere because quere is full');
  }
};

Queue.prototype.setSize = function(size) {
  this.size = size;
};

Queue.prototype.getSize = function() {
  return this.size;
};
// remove an element from the front of the queue
Queue.prototype.dequeue = function() {
  return this.elements.shift();
};
// check if the queue is empty
Queue.prototype.isEmpty = function() {
  return this.elements.length === 0;
};
// get the element at the front of the queue
Queue.prototype.peek = function() {
  if (this.isEmpty()) {
    console.error('error: cannot peek , queue is empty');
  } else {
    return this.elements[0];
  }
};
Queue.prototype.length = function() {
  return this.elements.length;
};
Queue.prototype.isFull = function() {
  return !(this.elements.length < this.size);
};
export default Queue;
