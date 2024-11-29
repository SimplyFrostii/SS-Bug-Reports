const express = require('express');
const app = express();

// Use environment variable for port, default to 3000 if not set
const port = process.env.PORT || 3000;

app.use(express.json()); // Parse incoming JSON requests

app.get('/', (req, res) => {
    res.send('Seaside Bug Reporting Backend');
});

// Listening on the dynamically assigned port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
