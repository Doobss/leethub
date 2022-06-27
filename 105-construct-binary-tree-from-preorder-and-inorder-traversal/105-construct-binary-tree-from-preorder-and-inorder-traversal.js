/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    
    function buildBinTree(curInOrder, curPreOrder) {
        // console.log({ curInOrder, curPreOrder })
        const root = curPreOrder.shift()
        const rootIndex = curInOrder.indexOf(root)
        const left = curInOrder.slice(0, rootIndex)
        const right = curInOrder.slice(rootIndex + 1)
        // console.log({ root, left, right })
        let leftTree, rightTree;
        if (left.length) {
            leftTree = buildBinTree(left, curPreOrder.slice(0, left.length))
        }

        if (right.length) {
            rightTree = buildBinTree(right, curPreOrder.slice(left.length))
        }

        // console.log({ root, leftTree, rightTree })
        return new TreeNode(root, leftTree, rightTree)
    }
    
    return buildBinTree([ ...inorder ], [ ...preorder ])
};

