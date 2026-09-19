const express = require("express");
const app = express();
const cors = require("cors");
const aiRoute = require("./routes/aiRoute");
require("dotenv").config();

const port = process.env.API_URL || 5000;

const corsOptions = {
    // Added your live Vercel link alongside local dev ports
    origin: [
        'http://localhost:5173', 
        'http://localhost:3000',
        'https://ai-resume-analyzer-three-teal.vercel.app' 
    ], 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, 
    optionsSuccessStatus: 200
};

app.use(express.json());
app.use(cors(corsOptions));

app.use('/api/ai', aiRoute);

app.get('/', (req, res) => {
    res.send("hehehheheh");
});

app.listen(port, () => {
    console.log(`server running peacfully at this port ${port}`);
});