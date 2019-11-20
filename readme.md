# Why?
I wanted to create a fast entry point for nodejs projects using eslint and ES6 features like arrow functions. Just clone this and start coding.
# Where to start  
Open src/app.js and start coding! :
```javascript
import { logger } from './logger'

const helloArrow = () => {
  logger.info('App is running!')
}

helloArrow()
```

# Run in dev mode
```bash
$ yarn dev
```
# Build for production
```bash
$ yarn build
$ yarn start
```
# Logging
Logging is integrated. (With timestamp)