import Base from "./base";
import h from "virtual-dom/h";

export default class Loading extends Base {
  constructor() {
    super('loading')
  }

  render() {
    return h('svg.loading', {
      attributes: {
        width: 24,
        height: 30
      }
    }, [
        h('use', {
          attributes: {
            'xmlns:xlink': "http://www.w3.org/1999/xlink",
            'xlink:href': '#loading'
          }
        })
      ])
  }
}