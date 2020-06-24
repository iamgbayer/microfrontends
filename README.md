# Microfrontends

> A practical approach to micro frontends architecture, this is a POC.

### About

- Deploys are independent because each service is delivered in different domains
- The codebase of each service is independent with monorepo
- Each service codebase is encapsulated thought monorepo packages
- Reuse third-party bundle between services with fetching them through CDN
- Share global data between services with `customProps`

### Improvements

- Webpack configurations
- Environment settings
- Trigger independents deploys based on package changes 

### Demo

- Orchestrator https://goofy-williams-c996a4.netlify.com/
- Navigation service https://navigation-d4e972.netlify.com/
- Home service https://home-6b31f1.netlify.com/
