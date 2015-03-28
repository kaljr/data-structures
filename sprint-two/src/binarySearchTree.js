var BinarySearchTree = function(value){
  var obj = Object.create(BinarySearchTree.prototype);
  obj.value = value;
  obj.left = null;
  obj.right = null;
  return obj;
};



BinarySearchTree.prototype.insert = function(value) {
  var node = BinarySearchTree(value);
    if(value < this.value) {
      if(this.left) {
        this.left.insert(value);
      }
      else {
        this.left = node;
      }
    }
    else {
      if(this.right) {
        this.right.insert(value);
      }
      else {
        this.right = node;
      }
    }
};

BinarySearchTree.prototype.contains = function(target) {
  var children = [];

  if(this.value === target) {
    return true;
  }

  if (this.left) {
    children.push(this.left);
  }
  if (this.right) {
    children.push(this.right);
  }

  for(var i=0; i<children.length; i++) {
    if (children[i].contains(target)){
      return true;
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  var children = [];

  if (this.left) {
    children.push(this.left);
  }
  if (this.right) {
    children.push(this.right);
  }

  cb(this.value);

  for(var i=0; i<children.length; i++) {
    children[i].depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
