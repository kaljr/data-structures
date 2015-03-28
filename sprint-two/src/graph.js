
var Graph = function(){
  this.nodeName = arguments[0];
  this.edges = {};
};

Graph.prototype.addNode = function(node){
  // new Graph(node);
  this.edges[node] = [];
};

Graph.prototype.contains = function(node){
  if (this.edges[node]) {
    return true;
  } else {
    return false;
  }
};

Graph.prototype.removeNode = function(node){
  delete this.edges[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return _.contains(this.edges[fromNode], toNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.edges) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



