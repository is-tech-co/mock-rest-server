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
    console.log(req.headers)
    console.log("")
    
    console.log("[BODY]")
    console.log(req.body)
    console.log("")

    console.log("")
    console.log("\\================== " + counter + " ==================/")
    console.log("")
    counter++;
    res.send("")
})

app.listen(2001, '0.0.0.0')