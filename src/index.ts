import { render } from "./core/render";
import Container from "./core/dom/controls/container";
import Chart from "./core/dom/controls/chart";



let graphic = {
  run() {
    let node = new Container({
      x: 10, y: 10, height: 100, width: 100
    },
      [
        new Container({
          x: 20, y: 20, height: 40, width: 40
        },
          [
            new Chart()
          ]
        )]
    )
    render(node)
  }
}

window.addEventListener('load', function () {
  graphic.run()
});

export default graphic