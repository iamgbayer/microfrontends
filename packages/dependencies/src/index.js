const isDevMode = true

console.log('Downloading dependencies')

function insertNewImportMap(newMapJSON) {
  const newScript = document.createElement('script')
  newScript.type = 'systemjs-importmap'
  newScript.text = JSON.stringify(newMapJSON)
  const allMaps = document.querySelectorAll('script[type="systemjs-importmap"]')

  allMaps[allMaps.length - 1].insertAdjacentElement('afterEnd', newScript)
}

const devDependencies = {
  imports: {
    react:
      'https://cdnjs.cloudflare.com/ajax/libs/react/16.9.0/umd/react.production.min.js',
    'react-dom':
      'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.production.min.js',
    'single-spa':
      'https://cdnjs.cloudflare.com/ajax/libs/single-spa/4.3.7/umd/single-spa.min.js',
    'styled-components':
      'https://cdnjs.cloudflare.com/ajax/libs/styled-components/4.3.2/styled-components.min.js',
    'single-spa-react': 'https://unpkg.com/single-spa-react',
    'react-router-dom':
      'https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/5.0.1/react-router-dom.js',
    'prop-types':
      'https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.7.2/prop-types.js'
  }
}

const prodDependencies = {
  imports: {
    react:
      'https://cdnjs.cloudflare.com/ajax/libs/react/16.9.0/umd/react.production.min.js',
    'react-dom':
      'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.production.min.js',
    'single-spa':
      'https://cdnjs.cloudflare.com/ajax/libs/single-spa/4.3.7/umd/single-spa.min.js',
    'styled-components':
      'https://cdnjs.cloudflare.com/ajax/libs/styled-components/4.3.2/styled-components.min.js',
    'single-spa-react': 'https://unpkg.com/single-spa-react',
    'react-router-dom':
      'https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/5.0.1/react-router-dom.min.js',
    'prop-types':
      'https://cdnjs.cloudflare.com/ajax/libs/prop-types/15.7.2/prop-types.min.js'
  }
}

isDevMode
  ? insertNewImportMap(devDependencies)
  : insertNewImportMap(prodDependencies)
