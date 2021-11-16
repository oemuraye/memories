import  express  from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express()
const port = process.env.PORT || 5000

app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors())

const connectionURL = 'mongodb+srv://memories-app:memories-app@cluster0.vrkfl.mongodb.net/test'

mongoose.connect(connectionURL)
.then(() => app.listen(port, () => console.log('Server is up on port ' + port)))
.catch((error) => console.log(error.message))
