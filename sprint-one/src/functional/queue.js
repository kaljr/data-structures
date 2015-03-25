var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[length] = value;
    length++;
  };

  someInstance.dequeue = function(){
    var result = null;
    result = storage[0];
    delete storage[0];
      for(var i=0; i<length-1; i++) {
        storage[i] = storage[i+1];
      }
    delete storage[length-1];
    length--;
    return result;
  };

  someInstance.size = function(){
    if(length <= 0) {
      return 0;
    }
    return length;
  };

  return someInstance;
};
