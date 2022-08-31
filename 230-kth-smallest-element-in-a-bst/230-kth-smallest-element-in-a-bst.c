/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
typedef struct TreeNode* Node;
int count = -1 ,result = -1;

int find(Node node) {
    if (node->left) {
        result = find(node->left);
        if (result != -1) return result;
    }
    
    count--;
    if (count == 0) return node->val;

    
    if (node->right) {
        result = find(node->right);
        if (result != -1) return result;
    }
    return -1;
}



int kthSmallest(Node root, int k) {
    count = k;
    return find(root);
}