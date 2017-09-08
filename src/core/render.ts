import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import create from 'virtual-dom/create-element';

let tree
let rootNode

export function render(node) {
  tree = node.render()
  rootNode = create(tree)
  document.querySelector('.html').appendChild(rootNode)
}

export function update(node) {
  let newTree = node.render();
  let patches = diff(tree, newTree);
  rootNode = patch(rootNode, patches);
  tree = newTree;
}