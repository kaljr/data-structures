 var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value){
    var temp = Node(value);
    if (list.head === null) {
     list.head = temp;
    }
    if (list.tail !== null) {
      list.tail.next = temp;
    }
    list.tail = temp;
  };

  list.removeHead = function(){
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target){
    if (arguments.length === 1) {
      var node = list.head;
    } else {
      var node = arguments[1];
    }
    if (node.value === target) {
      return true;
    }
    if (node.next !== null) {
      return list.contains(target,node.next);
    }
    return false;
  } ;
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


  //   var temp = list.head;
  //   if (temp.value === target) {
  //     return true;
  //   }

  //   var node = list.head;
  //   do {
  //     if(node.value === target) {
  //       return true;
  //     } else {
  //       node = node.next;
  //     }
  //   }
  //   while (node.next !== null)
  // };
/*
 * Complexity: What is the time complexity of the above functions?
 */

  // it('should remove the head from the list when removeHead is called', function(){
  //   linkedList.addToTail(4);
  //   linkedList.addToTail(5);
  //   expect(linkedList.head.value).to.equal(4);
  //   linkedList.removeHead();
  //   expect(linkedList.head.value).to.equal(5);
  // });
