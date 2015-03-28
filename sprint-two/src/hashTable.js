var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};


HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(bucket === undefined) {
    this._storage.set(i,[[k,v]]);
  } else {
    this._storage.set(i, bucket.push([k,v]));
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i)[0][1];
};


HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(item, index, storage) {
    if (i === index) {
     storage[i][0][1] = null;
  }});
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
