const { urlencoded } = require('express')
const express = require('express')
const fileUpload = require('express-fileupload')

const app = express()

app.set('view engine', 'ejs')

// middleware
// to accept json data
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
}))

// to accept url encoded data
app.use(urlencoded({extended: true}))

app.get('/myget', (req, res) => {
    // console.log(req.files)
    res.send(req.body)
})

app.post('/mypost', (req, res) => {
    console.log(req.files)
    res.send(req.body)
})

// render
app.get('/mygetform', (req, res) => {
    res.render("getform")
})

app.get('/mypostform', (req, res) => {
    res.render("postform")
})

app.listen(4000, () => console.log(`Server running at 4000`))