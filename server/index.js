require('dotenv').config()
const fs = require('fs')
const https = require('https')
const app = require('./server')
const port = process.env.PORT || 3000

// server.listen(port, function () {
//   // eslint-disable-next-line no-console
//   console.log('Listening on port', port)
// })

// https://timonweb.com/posts/running-expressjs-server-over-https/

https.createServer({
  key: fs.readFileSync('s.key'),
  cert: fs.readFileSync('s.cert')
}, app)
.listen(3000, function() {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})
