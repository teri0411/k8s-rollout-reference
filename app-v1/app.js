const express = require('express')
const cors = require('cors')
const os = require('os')
const app = express()
app.use(cors())
const port = 8080

app.get('/', (req, res) => {
  console.log('[v1] running in pod ' + req.socket.remoteAddress)
  res.send(`
    <h1>CozServer에 오신 것을 환영합니다!</h1>
    <div>버전: v1.0</div>
    <div>파드 이름: ${os.hostname()}</div>
    <div>${req.socket.remoteAddress}에서 오셨군요!</div>
  `)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})