require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require("./config/db");
const cookieParser = require('cookie-parser');
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

const port = process.env.PORT || 8082

const app = express();

connectDB() // CONNECT TO MONGO_DB;

// middleware
app.use(cors());
app.use(express.json({ extended: false }));
app.use(cookieParser());

// routes
app.use('/auth', authRoutes);
app.use('/api', userRoutes);

app.listen(process.env.PORT, () => console.log(`server is up and running on http://localhost:${port}`))