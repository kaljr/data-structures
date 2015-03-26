


var Stack = function() {

  this.storage = {};
  this.length = 0;

};

Stack.prototype.size = function() {
    if (this.length <= 0) {
      this.length = 0;
      return this.length;
    }
    return this.length;
};

Stack.prototype.push = function(val) {
    this.storage[this.length] = val;
    this.length ++;
};

Stack.prototype.pop = function() {
    var result = this.storage[this.length-1];
    this.length --;
    return result;
};





// Stack.prototype = {

//   size: function() {
//     if (this.length <= 0) {
//       this.length = 0;
//       return this.length;
//     }
//     return this.length;
//   },
//   push: function(val) {
//     this.storage[this.length] = val;
//     this.length ++;
//   },
//   pop: function() {
//     var result = this.storage[this.length-1];
//     this.length --;
//     return result;
//   }
//   }
  // ,
  // constructor: function() {
  //   return this.__proto__;
  // }




