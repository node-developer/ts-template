import Base from "./base";
import { VProperties, h } from "virtual-dom";
import { BaseDisplay } from "../const";
import merge from 'merge'

interface IContainerparameter {
  x: number,
  y: number,
  width: number,
  height: number
}

export default class Container extends Base {

  protected _x: number
  protected _y: number
  public width: number
  public height: number

  constructor({ x, y, width, height }: IContainerparameter, children?: Array<Base>) {
    super('container', children)

    this._x = x
    this._y = y
    this.width = width
    this.height = height
  }

  public get x(): number {
    let parent: Container = this.parent as Container
    return parent ? this._x - parent.x : this._x
  }

  public get y(): number {
    let parent: Container = this.parent as Container
    return parent ? this._y - parent.y : this._y
  }

  public render(vproperties: VProperties = {}) {
    vproperties = merge.recursive(true, vproperties, {
      style: {
        left: this.x + 'px',
        top: this.y + 'px',
        width: this.width === BaseDisplay.FULL ? '100%' : this.width + 'px',
        height: this.height + 'px'
      }
    })
    return super.render(vproperties)
  }
}