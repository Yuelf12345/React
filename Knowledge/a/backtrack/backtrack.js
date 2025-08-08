class Tree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  #dfs1(node, res) {
    if (!node) return;
    if (node.value === 7) {
      res.push(node.value);
    }
    this.#dfs1(node.left, res);
    this.#dfs1(node.right, res);
  }

  preOrder() {
    let res = [];
    // this.#dfs1(this, res);
    this.#dfs2(this, [], res);
    return res;
  }

  #dfs2(node, path, res) {
    if (!node) return
    path.push(node.value);
    if (node.value === 7) {
      res.push([...path]);
    }
    this.#dfs2(node.left, path, res);
    this.#dfs2(node.right, path, res);
    // 到达树底时 回退
    path.pop() 
  }
}
/**
 *       1
 *      / \
 *    2    3
 *   / \    \
 *  4   5    6
 *      \(7)/
 */
const tree = new Tree(1);
tree.left = new Tree(2);
tree.right = new Tree(3);
tree.left.left = new Tree(4);
tree.left.right = new Tree(5);
tree.right.left = new Tree(6);
tree.left.right.right = new Tree(7);
tree.right.left.left = new Tree(7);
console.log(tree);
console.log(tree.preOrder()); // [ 1, 2, 4, 5, 3, 6 ]

// 1. 并判断当前节点的值是否为7的值加入结果
// 2. 搜索所有值为7的节点，请返回根节点到这些节点的路径。
