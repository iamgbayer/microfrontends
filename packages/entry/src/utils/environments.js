const environments = {
  dev: {
    HOME_URL: 'http://localhost:8083/main.js',
    NAVIGATION_URL: 'http://localhost:8082/main.js'
  },
  prod: {
    HOME_URL: 'http://localhost:8083/main.js',
    NAVIGATION_URL: 'http://localhost:8082/main.js'
  }
}

export const getEnvs = () => {
  /*eslint no-undef: 0*/
  return environments[process.env.ENV]
}
