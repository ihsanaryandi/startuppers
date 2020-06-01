const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('./public'))
app.use(require('./router.js'))

const PORT = 3000

app.listen(PORT, () => console.log(`Server Running : http://localhost:${PORT}`))