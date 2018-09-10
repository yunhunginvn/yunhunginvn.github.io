import {getPageManager} from './PageManager.js';

class Router
{
  constructor() {
    this.nodes = new Map;
    this.history = [];
  }

  register(id, node) {
    this.nodes.set(id, node)
  }

  moveTo(id) {
    this._activeNode(id)
    this.history.push(id)
  }

  moveBack() {
    this.history.pop()
    this._activeNode(this.history[this.history.length-1])
  }

  _activeNode(id) {
    getPageManager().getPageObject(id).componentWillMount()
    this.nodes.forEach((node, _id) => {
      if (_id === id) {
        node.classList += ' active'
      } else {
        node.classList.remove('active')
      }
    })
  }
}

let r = null;

export function getRouter() {
  if (r === null) r = new Router;
  return r;
}
