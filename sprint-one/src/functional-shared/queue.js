



var Queue = function(){
  var obj = {};
  obj.storage = {};
  obj.length = 0;
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  size: function() {
    return this.length;
  },
  enqueue: function(val) {
    this.storage[this.length] = val;
    this.length ++;
  },
  dequeue: function() {
    var result = this.storage[0];
    for (var i=0; i<this.length-1; i++) {
      this.storage[i] = this.storage[i+1];
    }
    delete this.storage[this.length-1];
    if (this.length > 0) {
      this.length--;
    }
    return result;
  }
};





