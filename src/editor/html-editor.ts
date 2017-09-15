import DomRender from "./../core/helper/dom-render";
import Background from "./../core/dom/controls/background";
import Container from "./../core/dom/controls/container";
import Chart from "./../core/dom/controls/chart";
import CurrentSelection from "./../core/helper/current-selection";

export default class HtmlEditor {

  public static initialize(): HtmlEditor {
    return new HtmlEditor()
  }

  constructor() {

    let domRender
    let node
    let selection

    domRender = new DomRender(document.querySelector('.html'))

    node = new Background([
      new Container({
        x: 0, y: 0, height: 110, width: 110
      },
        [
          new Container({
            x: 10, y: 10, height: 40, width: 40
          },
            [
              new Chart()
            ]
          ),
          new Container({
            x: 60, y: 10, height: 40, width: 40
          },
            [
              new Chart()
            ]
          )
        ]
      )
    ])

    node.on('onselecthandler', function (c) {
      selection.set(c)
    })

    domRender.create(node.render())

    selection = new CurrentSelection()

  }
}