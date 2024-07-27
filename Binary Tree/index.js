// Binary Tree

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        const newNode = new Node(data);
        if(this.root == null){
            this.root = newNode;
        } else{
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode){
        if (newNode.data < node.data){
            if(node.left == null){
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if(node.right == null){
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrder(node = this.root){
        if(node != null){
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }

    preOrder(node = this.root) {
        if (node != null) {
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    postOrder(node = this.root) {
        if (node != null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.data);
        }
    }

    levelOrder(node = this.root){
        if(node == null){
            return;
        }

        const queue = [root];

        while(queue.length > 0){
            const currNode = queue.shift();
            console.log(currNode.data);

            if(currNode.left){
                queue.push(currNode.left);
            }

            if(currNode.right){
                queue.push(currNode.right);
            }
        }
    }

    levelOrderRecursive = function (root) {
        const result = [];
        const traverse = (node, level) => {
            if (!node) return;

            if (result.length === level) {
                result.push([]);
            }

            result[level].push(node.val);
            traverse(node.left, level + 1);
            traverse(node.right, level + 1);
        };
        traverse(root, 0, result);
        return result;
    };

    zigZagLevelOrderTraversal(node = this.root) {
        if (node == null) {
            return [];
        }

        const queue = [root];
        const result = [];
        let direction = 0;
        while (queue.length > 0) {
            const currSize = queue.length;
            const currentLevel = [];
            while(currSize--){
                const currNode = queue.shift();
                currentLevel.push(currNode.data)

                if (currNode.left) {
                    queue.push(currNode.left);
                }

                if (currNode.right) {
                    queue.push(currNode.right);
                }
            }
            if(direction){
                direction = 0;
                currentLevel.reverse();
            } else {
                direction = 1;
            }
            result.push(currentLevel);
        }
        return result;
    }

    /**
     * 1
     * 2 3
     *   5  4
     * 
     * q[ 5, 4]
     * 1, 2, 3, 5, 4
     */

    /**
     * A binary tree's maximum depth is the number of nodes 
     * along the longest path from the root node down to the farthest leaf node.
     */
    maxiMumDepthOfBinaryTree(node = this.root){
        if(node == null){
            return 0;
        }

        return 1 + Math.max(this.maxiMumDepthOfBinaryTree(node.left), this.maxiMumDepthOfBinaryTree(node.right));
    }

    /**
     * Given the root of a binary tree and an integer targetSum, return true if the tree has a 
     * root-to-leaf path such that adding up all the values along the path equals targetSum.
     */
    pathSum(node = this.root, targetSum){
        if(node == null){
            return false;
        }

        if(node.left == null & node.right == null){
            return node.data === targetSum;
        }

        return this.pathSum(node.left, targetSum - node.data) || this.pathSum(node.right, targetSum - node.data);
    }

    /**
     * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
     */
    symmetricTree(node = this.root){
        return this.symmetricTreeHelper(node, node);
    }

    symmetricTreeHelper(p, q){
        if(p == null && q == null){
            return true;
        }

        if(p == null || q == null){
            return false;
        }

        return p.data == q.data && this.symmetricTreeHelper(p.left, q.right) && this.symmetricTreeHelper(p.right, q.left)
    }

    /**
     * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
     */
    sameTree(p, q){
        if(p == null && q == null){
            return true;
        }

        if(p == null || q == null){
            return false;
        }

        return p.data == q.data && this.sameTree(p.left, q.left) && this.sameTree(p.right, q.right)
    }

    diameterOfBinaryTree(node = this.root){
        let ans = [0];
        this.diameterOfBinaryTreeHelper(node, ans);
        return ans[0];
    }

    diameterOfBinaryTreeHelper(node, ans){
        if(node == null){
            return 0;
        }

        let leftDepth = this.diameterOfBinaryTreeHelper(node.left, ans);
        let rightDepth = this.diameterOfBinaryTreeHelper(node.right, ans);

        ans[0] = Math.max(ans[0], 1 + leftDepth + rightDepth);

        return max(leftDepth, rightDepth);
    }


    // Given the root of a binary tree, invert the tree, and return its root.
    invertBinaryTree(node = this.root){
        if(node){
            node.left = this.invertBinaryTree(node.right);
            node.right = this.invertBinaryTree(node.left);
        }
        return node;
    }

    /**
     * A height-balanced binary tree is a binary tree in which the depth 
     * of the two subtrees of every node never differs by more than one.
     */

    heightOfBinaryTree(node = this.root){
        if(node == null){
            return 0;
        }

        leftHeight = this.heightOfBinaryTree(node.left);
        if(leftHeight == -1){
            return -1;
        }

        rightHeight = this.heightOfBinaryTree(node.right);
        if(rightHeight == -1){
            return -1;
        }

        if(Math.abs(left - right) > 1){
            return -1;
        }

        return max(leftHeight, rightHeight) + 1;
    }

    balanceBinaryTree(node = this.root){
        return this.heightOfBinaryTree(node) != -1;
    }

    /**
     * “The lowest common ancestor is defined between two nodes p and q as the lowest node 
     * in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
     */
    lowestCommonAncestor(node = this.root, p, q){
        if(p.data < node.data && q.data < node.data){
            return this.lowestCommonAncestor(node.left);
        } 
        
        if (p.data > node.data && q.data > node.data) {
            return this.lowestCommonAncestor(node.right);
        }
        return this.root;
    }

    /**
     * 
     * Given the root of a binary tree, imagine yourself standing on the right side of it, 
     * return the values of the nodes you can see ordered from top to bottom.
     */
    rightSideView = function (root) {
        if (root == null) return []
        let result = []
        let queue = [root]
        while (queue.length > 0) {
            let currSize = queue.length;
            result.push(queue[currSize - 1].val);

            while (currSize--) {
                let node = queue.shift()
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }
        return result;
    };

    recursiveRightSideView = function (root) {
        const result = [];
        const traverse = (node, level) => {
            if (!node) return;
            if (result.length === level) result.push(node.val);
            traverse(node.right, level + 1);
            traverse(node.left, level + 1);
        };
        traverse(root, 0);
        return result;
    };

    buildTree = function (preorder, inorder) {
        if (preorder.length == 0) return null;
        const rootIndex = inorder.indexOf(preorder[0]);
        const rootNode = new Node(preorder[0]);

        rootNode.left = this.buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex));
        rootNode.right = this.buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1));
        return rootNode;
    };

    /**
     * inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
     * root = 3, rootIndex = 1, inorder: [9] [15, 20, 7], postorder: [9], [15, 7, 20]
     */

    buildTree = function (inorder, postorder) {
        if(postorder.length == 0) return null;
        let postOrderLength = postorder.length;
        const rootIndex = inorder.indexOf(postorder[postOrderLength - 1]);
        const rootNode = new Node(postorder[postOrderLength - 1]);

        rootNode.left = this.buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex));
        rootNode.right = this.buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex, postOrderLength - 1));
        return rootNode;
    };

    /**
     * You are given the root of a binary tree containing digits from 0 to 9 only. 
     * Each root-to-leaf path in the tree represents a number.
     * For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123. 
     * Return the total sum of all root-to-leaf numbers
     */
    sumNumbers = function (node, curr = 0) {
        if (node == null) {
            return 0;
        }

        curr = curr * 10 + node.val;
        if (node.left == null && node.right == null) {
            return curr;
        }

        return this.sumNumbers(node.left, curr) + this.sumNumbers(node.right, curr);
    }

    /**
     * Given the root of a binary tree, flatten the tree into a "linked list":
     * The "linked list" should use the same TreeNode class where the right child pointer points to the next 
     * node in the list and the left child pointer is always null.
     * The "linked list" should be in the same order as a pre-order traversal of the binary tree.
     */
    flatten(node = this.root){
        if(node == null){
            return;
        }
        let curr = node, last = null;
        while(curr){
            if(curr.left){
                last = curr.left;

                while(last.right){
                    last = last.right;
                }

                last.right = curr.right;
                curr.right = curr.left;
                curr.left = null;
            }
            curr = curr.right;
        }
    }


    maxPathSum = function (root) {
        const res = [Number.NEGATIVE_INFINITY]
        solve(root, res);
        return res;
    };

    solve = function (root, res) {
        if (root == null) {
            return 0;
        }

        let leftPathSum = solve(root.left, res);
        let rightPathSum = solve(root.right, res);

        let currPathSum = Math.max(Math.max(leftPathSum, rightPathSum) + root.val, root.val);
        let ans = Math.max(currPathSum, leftPathSum + rightPathSum + root.val);
        res[0] = Math.max(res[0], ans);
        return currPathSum;
    }
}


/***
 * 
 * 
 * 
 * 1
 * 2    3
 * 4 5    7
 * 6   
 * 
 * 
 *  1
 *    2   
 *      4 
    *     6  
    *       5    
    *         3
    *           7
 *   
 *      
 * curr = 1, last = null
 * curr = 4, last = 6
 * 
 */

