//Binary Tree
//TC - O(logn)
//Balanced binary Tree
//Use Cases - Dictionary, Phonebook, Users of application 

function BST(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value){
  if(value <= this.value){
    if(!this.left) this.left = new BST(value);
    else this.left.insert(value);
  }
  else if(value > this.value){
    if(!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
}

BST.prototype.contains = function(value){
  if(value == this.value) return true;
  else if(value <= this.value){
    if(!this.left) return false;
    else return this.left.contains(value);
  }
  else if(value > this.value){
    if(!this.right) return false;
    else return this.right.contains(value);
  }
}

BST.prototype.depthfirsttraversal = function(iteratorFunc, order){
  if(order === 'pre-order') iteratorFunc(this.value);
  if(this.left) this.left.depthfirsttraversal(iteratorFunc,order);
  if(order === 'in-order') iteratorFunc(this.value);
  if(this.right) this.right.depthfirsttraversal(iteratorFunc, order);
  if(order === 'post-order') iteratorFunc(this.value);
}

BST.prototype.breadthFirstSearch = function(iteratorFunc){
  var queue = [this];
  while(queue.length){
    var treeNode = queue.shift();
    iteratorFunc(treeNode);
    if(treeNode.left) queue.push(treeNode.left);
    if(treeNode.right) queue.push(treeNode.right);
  }
}

var bst = new BST(50);
bst.insert(30);
bst.insert(20);
bst.insert(59);
bst.insert(70);
bst.insert(10);
bst.insert(80);
bst.insert(90);
bst.insert(100);
console.log(bst.left.left);

console.log(bst.contains(20));

//bst.depthfirsttraversal(log, 'in-order');
//bst.depthfirsttraversal(log, 'pre-order');
//bst.depthfirsttraversal(log, 'post-order');

function log(value){
  console.log(value.value);
}

bst.breadthFirstSearch(log);
