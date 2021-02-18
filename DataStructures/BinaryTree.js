//Binary Tree

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

BST.prototype.constains = function(value){
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

BST.prototype.depthfirsttraversal = function(iteratorFunc){
  if(this.left) this.left.depthfirsttraversal(iteratorFunc);
  iteratorFunc(this.value);
  if(this.right) this.right.depthfirsttraversal(iteratorFunc);
}

BST.prototype