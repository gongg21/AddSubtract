const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.post('/api/add_numbers', (req, res) => {
    try {
        const { first, second } = req.body;
        if (isNaN(first) || isNaN(second)) {
            throw new Error('Invalid input provided. Please enter numbers.')
        }
        const result = Number(first) + Number(second);
        res.json({ result });
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

app.post('/api/subtract_numbers', (req, res) => {
    try {
        const { first, second } = req.body;
        if (isNaN(first) || isNaN(second)) {
            throw new Error('Invalid input provided. Please enter numbers.')
        }
        const result = Number(first) - Number(second);
        res.json({ result });
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
