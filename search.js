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

function DFS(root) {
  if (root.left) {
    DFS(root.left)
  }

  console.log(root.data)

  if (root.right) {
    DFS(root.right)
  }
}

DFS(nodeF)

function BFS(root) {
  let myQueue = new Queue()
  myQueue.enqueue(root)
  while (!myQueue.isEmpty()) {
    let currentTreeNode = myQueue.dequeue()
    console.log(currentTreeNode.data)
    if (currentTreeNode.left) {
      myQueue.enqueue(currentTreeNode.left)
    }
    if (currentTreeNode.right) {
      myQueue.enqueue(currentTreeNode.right)
    }
  }
}

BFS(nodeF)
