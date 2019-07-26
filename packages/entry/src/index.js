import { start } from 'single-spa'

import { home, navigation } from './registers'

home()
navigation()

start()
