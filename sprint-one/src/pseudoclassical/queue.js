var Queue = function() {
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.size = function() {
  return this.head - this.tail;
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.head] = val;
  this.head++;
};

Queue.prototype.dequeue = function() {
  if (this.head - this.tail > 0) {
    var result = this.storage[this.tail];
    delete this.storage[this.tail];
    this.tail++;
    return result;
  }
};


// var Queue = function() {
//   this.storage = {};
//   this.length = 0;

// };


// Queue.prototype.size = function() {
//   return this.length;
// };

// Queue.prototype.enqueue = function(val) {
//   this.storage[this.length] = val;
//   this.length ++;
// };

// Queue.prototype.dequeue = function(val) {
//   var result = null;

//   if(this.length > 0) {
//     result = this.storage[0];
//     for (var i = 0; i<this.length-1; i++) {
//       this.storage[i] = this.storage[i+1];
//     }
//     delete this.storage[this.length-1];
//     this.length --;
//     return result;
//   }
//   if (result === null) {
//     return {};
//   }
// };





