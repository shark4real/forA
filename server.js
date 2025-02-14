const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

// Endpoint to run the Python script
app.get('/run_turtle', (req, res) => {
    exec('python turtle_script.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return res.status(500).json({ message: 'Error running turtle script' });
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return res.status(500).json({ message: 'Error in turtle script' });
        }
        console.log(`stdout: ${stdout}`);
        res.json({ message: 'Turtle drawing started!' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
