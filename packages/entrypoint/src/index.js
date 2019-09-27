window.SystemJS = window.System

import { start, registerApplication } from 'single-spa'
import { whenMatch } from './utils'

registerApplication(
  'home',
  SystemJS.import('@microfrontends/home'),
  whenMatch('/')
)

registerApplication(
  'checkout',
  SystemJS.import('@microfrontends/checkout'),
  whenMatch('/checkout')
)

registerApplication(
  'navigation',
  SystemJS.import('@microfrontends/navigation'),
  () => true
)

start()
