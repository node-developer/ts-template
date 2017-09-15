import DomRender from "./../core/helper/dom-render";
import Background from "./../core/dom/controls/background";
import Container from "./../core/dom/controls/container";
import Chart from "./../core/dom/controls/chart";
import events from 'events'
import Base from "../core/dom/controls/base";

export default class HtmlEditor extends events {

  public static initialize(): HtmlEditor {
    return new HtmlEditor()
  }
  private domRender: DomRender
  private node: Background

  constructor() {
    super()
    this.domRender = new DomRender(document.querySelector('.html'))
    this.node = new Background()
    this.domRender.create(this.node.render())

    this.node.on('onselecthandler', o => this.onSelectNode(o))
  }

  onSelectNode(o: Base) {

  }
}