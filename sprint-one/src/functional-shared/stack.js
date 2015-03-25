


var Stack = function() {



  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.length = 0;

  _.extend(obj,stackMethods);
  return obj;
};

var stackMethods = {
  size: function() {
    if(this.length <= 0) {
      this.length = 0;
      return 0;
    }
    return this.length;
  },
  push: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },
  pop: function() {
    var result = this.storage[this.length-1];
    this.length--;
    return result;

  }
};




// Do:
// Create an object that holds the methods that will be shared by
// all instances of the class.
// You'll need to use the keyword this in your methods.
// Use _.extend to copy the methods onto the instance.
//
//
// Don't:
// Use the keyword new or prototype chains
// Example: functional instantiation example
