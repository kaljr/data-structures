


var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.length = 0;
  obj.storage = {};




  return obj;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,

  // but try not not reference your old code in writing the new style.

};

var stackMethods = {
  size: function() {
    if(this.length <= 0) {
      this.length = 0;
      return 0;
    }
    return this.length;
  },
  push: function (val) {
    this.storage[this.length] = val;
    this.length++;
  },
  pop: function() {
    var result = this.storage[this.length-1];
    this.length--;
    return result;
  }
};


