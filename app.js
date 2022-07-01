const express = require('express')
const app = express()
const port = 1339

var router = express.Router();

require('./routes/checkout')(router);

router.get('/', (req, res) => {
  res.send('Me busy, leave me alone! Ready to work...')
})

app.use('/peon', router);
app.listen(port, () => {
  console.log(`Peon listening on ${port}, What do you want? Work work!`)
})