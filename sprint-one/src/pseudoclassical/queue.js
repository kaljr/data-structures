


var Queue = function() {

  this.length = 0;

};


Queue.prototype.size = function() {
  if (this.length <= 0) {
    this.length = 0;
    return 0;
  }
  return this.length;
};

Queue.prototype.enqueue = function(val) {
  this[this.length-1] = val;
  this.length ++;
};

Queue.prototype.dequeue = function(val) {
  var result = this[0];
  for(var i = 0; i<this.length-1; i++) {
    this[i] = this[i+1];
  }
  delete this[this.length-1];
  this.length --;
  return result;
};





