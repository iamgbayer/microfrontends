window.SystemJS = window.System

import { start, registerApplication } from 'single-spa'
import { whenMatch } from './utils'

registerApplication(
  '@microfrontends/home',
  SystemJS.import('@microfrontends/home'),
  whenMatch('/')
)

registerApplication(
  '@microfrontends/checkout',
  SystemJS.import('@microfrontends/checkout'),
  whenMatch('/checkout')
)

registerApplication(
  '@microfrontends/navigation',
  SystemJS.import('@microfrontends/navigation'),
  () => true
)

start()
