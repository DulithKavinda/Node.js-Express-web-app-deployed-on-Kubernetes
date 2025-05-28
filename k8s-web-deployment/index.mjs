import express from 'express';
import fetch from 'node-fetch';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Setup __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Web server is listening at port ${PORT}`);
});
