//LinkedList

function LinkedList(){
  this.head = null;
  this.tail = null;
}
function Node(value, next, prev){
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value){
  let newNode = new Node(value, this.head, null);
  if(this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
}

LinkedList.prototype.addToTail = function(value){
  let newNode = new Node(value,null,this.tail);
  if(this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
}

LinkedList.prototype.removeHead = function(){
  if(!this.head) return null;
  let val = this.head.value;
  this.head.next = this.head;
  if(this.head) this.head.prev = null;
  else this.tail = null;
  return val;
}

LinkedList.prototype.removeTail = function(){
  if(!this.tail) return null;
  let val = this.tail.value;
  this.tail.prev = this.tail;
  if(this.tail) this.tail.next = null;
  this.head = null;
  return val;
}

LinkedList.prototype.searchVal = function(searchVal){
  let currentValue = this.head;
  while(currentValue){
    if(searchVal == currentValue.value) return true;
    currentValue = currentValue.next;
  }
  return false;
}

LinkedList.prototype.traverseList = function(){
  let currentNode = this.head;
  while(currentNode){
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
}

LinkedList.prototype.addAfter = function(value, afterVal){
  let currentNode = this.head;
  let afterNode;
  while(currentNode){
    if(currentNode.value == afterVal)
    { afterNode = currentNode;
      break;
    }
    currentNode = currentNode.next;
  }
  if(afterNode == this.tail){
    LinkedList.prototype.addToTail(value);
  }
  else{
    let newNode = new Node(value, afterNode.next, afterNode);
    afterNode.next.prev = newNode;
    afterNode.next = newNode;
  }
}

var ll = new LinkedList();
ll.addToHead(1000);
ll.addToHead(2000);
ll.addToHead(3000);
ll.addToTail(4000);
var a = ll.searchVal(2000);

ll.addAfter(5000, 4000);
console.log(ll);
console.log(ll.traverseList())
