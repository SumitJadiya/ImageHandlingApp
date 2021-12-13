const { urlencoded } = require('express')
const express = require('express')

const app = express()


app.set('view engine', 'ejs')

// middleware

// to accept json data
app.use(express.json())

// to accept url encoded data
app.use(urlencoded({extended: true}))

app.get('/myget', (req, res) => {
    res.send(req.body)
})

app.get('/mygetform', (req, res) => {
    res.render("getform")
})

app.get('/mypostform', (req, res) => {
    res.render("postForm")
})

app.listen(4000, () => console.log(`Server running at 4000`))