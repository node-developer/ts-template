import tslib from 'tslib'
import { load } from './utils'
import Mat from './core/mat'

export default {
  async run() {
    let { width, height, data } = await load('./1.bmp')
    console.log(new Mat(width,height,data))
  }
}