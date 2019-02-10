var assert = require('assert');
var Search = require('../Search');
var TreeNode = require('../TreeNode')

let root = setupTests()

describe('Search', function() {
    describe('#DFS', function() {
        it('should return -1 when the value is not present', function() {
            let search = new Search()
            let result = search.dfs(root)
            assert.equal(result, -1);
        });
    });
});

function setupTests() {
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

    return nodeA
}