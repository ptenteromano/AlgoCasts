// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
const Node = require("./node");

function levelWidth(root) {
  let nodes = [root];
  let childrenList = [];
  const result = [nodes.length];

  while (nodes.length) {
    for (let node of nodes) {
      childrenList.push(...node.children);
    }

    if (childrenList.length > 0) result.push(childrenList.length);

    nodes = [...childrenList];
    childrenList = [];
  }

  return result;
}

const root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);

console.log(levelWidth(root));

module.exports = levelWidth;
