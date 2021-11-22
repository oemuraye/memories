import  express  from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express()
const port = process.env.PORT


app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors())

app.use('/posts', postRoutes)

const connectionURL = process.env.MONGODB_URL

mongoose.connect(connectionURL)
.then(() => app.listen(port, () => console.log('Server is up on port ' + port)))
.catch((error) => console.log(error.message))
