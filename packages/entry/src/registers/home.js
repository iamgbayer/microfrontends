import { registerApplication } from 'single-spa'
import { runScript } from './utils'

const load = async () => {
  await runScript('http://localhost:8083/main.js')
  return window.homeLibrary
}

export const home = () => registerApplication('home', load, () => true)
