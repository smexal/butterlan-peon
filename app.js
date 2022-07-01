const express = require('express')
const app = express()
const port = 1339

/**
 * load routes
 */
var router = express.Router();
require('./routes/checkout')(router);
require('./routes/login')(router);

/**
 * just some random home response
 */
router.get('/', (req, res) => {
  res.send('Me busy, leave me alone! Ready to work...')
})

/**
 * configuration and serve
 */
app.use(express.json())
app.use('/peon', router);
app.listen(port, () => {
  console.log(`Peon listening on ${port}, What do you want? Work work!`)
})