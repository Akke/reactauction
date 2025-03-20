require('dotenv').config();
const app = require('./app.js')

const PORT = process.env.PORT || 3500;

app.listen(PORT, (req, res) =>{
    console.log(`Listening on PORT: ${PORT}`)
})
