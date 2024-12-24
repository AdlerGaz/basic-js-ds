const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  root() {
    return this.node;
  }

  add(data) {
    if (!this.node) {
      this.node = new Node(data);
    } else {
      let currentNode = this.node;
      while (true) {
        if (currentNode.data > data) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = new Node(data);
          }
        } else if (currentNode.data < data) {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = new Node(data);
          }
        } else {
          break;
        }
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
