const express = require("express")

const app = express()

app.use(express.static("public"))

app.get('/', (req, res) => res.sendFile(`${__dirname}/views/home-page.html`))
app.get('/arte', (req, res) => res.sendFile(`${__dirname}/views/arte.html`))
app.get('/moda', (req, res) => res.sendFile(`${__dirname}/views/moda.html`))


app.listen(3000, () => console.log("El servidor está levantado"))