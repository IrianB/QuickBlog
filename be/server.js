import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/db.js'
import adminRouter from './routes/adminRoutes.js'

const app = express()

await connectDB()

//middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req, res) => res.send('api is working!'))
app.use('/api/admin', adminRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('server is running ' + PORT)
})

export default app