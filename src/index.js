import { app } from './consts'
import config from './config'

import './routes'

app.listen(config.port, () => {
  console.log(`ES6 application listening on port ${config.port}!`)
})
