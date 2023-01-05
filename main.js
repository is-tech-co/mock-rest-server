const express = require('express')

const app = express()
app.use(express.json())
app.use(express.text())
let counter = 0
app.all('*', (req, res) => {
    console.log("/================== " + counter + " ==================\\")
    console.log("")

    console.log(req.method, req.path)
    console.log("")

    console.log("[HEADERS]")
    console.log(JSON.stringify(req.headers, null, 2))
    console.log("")

    console.log("[BODY]")
    console.log(JSON.stringify(req.body, null, 2))
    console.log("") 

    console.log("")
    console.log("\\================== " + counter + " ==================/")
    console.log("")
    counter++;
    res.send("")
})

app.listen(2001, '0.0.0.0')