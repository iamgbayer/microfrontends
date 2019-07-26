import { registerApplication } from 'single-spa'
import { runScript } from './utils'

import { getEnvs } from '../utils'

const { HOME_URL } = getEnvs()

const load = async () => {
  await runScript(HOME_URL)
  return window.homeLibrary
}

export const home = () => registerApplication('home', load, () => true)
