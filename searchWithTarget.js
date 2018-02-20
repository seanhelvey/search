let Queue = require('./Queue.js')

class TreeNode {
  constructor(data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

nodeA = new TreeNode("A")
nodeB = new TreeNode("B")
nodeC = new TreeNode("C")
nodeD = new TreeNode("D")
nodeE = new TreeNode("E")
nodeF = new TreeNode("F")
nodeG = new TreeNode("G")
nodeH = new TreeNode("H")
nodeI = new TreeNode("I")

nodeF.left = nodeB
nodeF.right = nodeG
nodeB.left = nodeA
nodeB.right = nodeD
nodeD.left = nodeC
nodeD.right = nodeE
nodeG.right = nodeI
nodeI.left = nodeH

function DFS(root, target) {
  console.log(root.data)
  if (root.data === target) {
    return true;
  }
  if (root.left) {
    if (DFS(root.left, target)) {
      return true;
    }
  }
  if (root.right) {
    if (DFS(root.right, target)) {
      return true;
    }
  }
  return false;
}

console.log(DFS(nodeF, "A"))
console.log(DFS(nodeF, "Z"))

function BFS(root, target) {
  let myQueue = new Queue()
  myQueue.enqueue(root)
  while (!myQueue.isEmpty()) {
    let currentTreeNode = myQueue.dequeue()
    console.log(currentTreeNode.data)
    if (currentTreeNode.data === target) {
      return true;
    }
    if (currentTreeNode.left) {
      myQueue.enqueue(currentTreeNode.left)
    }
    if (currentTreeNode.right) {
      myQueue.enqueue(currentTreeNode.right)
    }
  }
  return false;
}

console.log(BFS(nodeF, "A"))
console.log(BFS(nodeF, "Z"))
