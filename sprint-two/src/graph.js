

var Graph = function(){
  this.nodeName = arguments[0];
  this.edges = {};
};

Graph.prototype.addNode = function(node){
  // new Graph(node);
  this.edges[node] = new Graph(node);
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
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



