import DomRender from "./core/helper/dom-render";
import Background from "./core/dom/controls/background";
import Container from "./core/dom/controls/container";
import Chart from "./core/dom/controls/chart";
import CurrentSelection from "./core/helper/current-selection";
let domRender
let node
let selection
let graphic = {
  run() {
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
      console.log(c.el)
      selection.set(c)
    })

    domRender.create(node.render())

    selection = new CurrentSelection()
  },
  update() {
    node[0].push(
      new Container({ x: 10, y: 60, height: 40, width: 40 }, [new Chart()]),
      new Container({ x: 60, y: 60, height: 40, width: 40 }, [new Chart()]),
      new Container({ x: 110, y: 60, height: 40, width: 40 }, [new Chart()])
    )

    node[0].width = 160

    domRender.update(node.render())
  }
}

window.addEventListener('load', function () {
  graphic.run()
  window.setTimeout(function () {
    graphic.update()
  }, 2000)
});

export default graphic