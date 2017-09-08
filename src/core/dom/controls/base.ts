import { push, splice, forEach, slice } from './../utils';
import { VProperties } from 'virtual-dom';
import h from 'virtual-dom/h'
import { absolute } from '../decorators/position';
import merge from 'merge'

@absolute
export default class Base {

  protected tagName: string = 'div'

  protected type: string

  protected _uid: number

  public length: number

  public parent: Base

  public position: string

  public constructor(type: string = 'base', children?: Base[]) {

    this._uid = Math.round(Math.random() * 1e5)
    this.type = type
    children ?
      children.forEach(child => {
        this.push(child)
      }) : null
  }



  public push(...args) {
    args[0].parent = this
    return push(this, ...args)
  }

  public forEach(...args) {
    return forEach(this, ...args)
  }

  public slice(...args) {
    return slice(this, ...args)
  }

  public toArray() {
    return this.slice()
  }

  public map(dispose: Function) {
    let result = [];
    this.forEach(child => result.push(dispose(child)))
    return result
  }

  public render(vproperties: VProperties = {}) {
    vproperties = merge.recursive(true, vproperties, {
      style: {
        position: this.position
      }
    })
    return h(this.type ? `${this.tagName}.${this.type}` : `${this.tagName}`, vproperties, this.map(child => child.render()));
  }
}