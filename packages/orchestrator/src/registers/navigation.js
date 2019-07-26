import { registerApplication } from 'single-spa'
import { runScript } from './utils'

import { getEnvs } from '../utils'

const { NAVIGATION_URL } = getEnvs()

const load = async () => {
  await runScript(NAVIGATION_URL)
  return window.navigationService
}

export const navigation = () =>
  registerApplication('navigation', load, () => true)
