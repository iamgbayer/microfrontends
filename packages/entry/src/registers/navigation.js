import { registerApplication } from 'single-spa'
import { runScript } from './utils'

const load = async () => {
  await runScript('http://localhost:8082/main.js')
  return window.navigationLibrary
}

export const navigation = () =>
  registerApplication('navigation', load, () => true)
