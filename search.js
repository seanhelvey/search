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
  console.log("Todo: DFS")
}

DFS(nodeF)

function BFS(root) {
  console.log("Todo: BFS")
}

BFS(nodeF)
