var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  if(this.value === target) {
      return true;
  }
  for (var i=0; i<this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};



// treeMethods.contains = function(target){
//   if (arguments.length < 2) {
//     var node = this;
//     if (node.value === target) {
//       return true;
//     }
//   }
//   else {
//     var node = arguments[1];
//   }

//   for (var i=0; i<node.children.length; i++) {
//     if(node.children[i].value === target) {
//       return true;
//     }
//     var result = this.contains(target, node.children[i]);
//   }
//   return result;
// };






/*
 * Complexity: What is the time complexity of the above functions?
 */
