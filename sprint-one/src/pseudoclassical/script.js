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

var stacks = [];

for(var i=0;i<50000;i++) {
  stacks[i] = Stack();

  for(var j=0;j<10000;j++) {
    stacks[i].push(j);
  }
  for(var j=0;j<10000;j++) {
    stacks[i].pop();
  }
}


