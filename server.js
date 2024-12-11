const express = require('express');
const path = require('path');

const app = express();

app.use('/html',express.static(path.join(__dirname, 'html')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/script', express.static(path.join(__dirname, 'script')));
app.use('/img', express.static(path.join(__dirname, 'img')));

app.get('/download', (req, res) => {
    const fileName = req.query.file;
    const filePath = path.join(__dirname, 'files', fileName);

    res.download(filePath, fileName, (err) => {
        if (err) {
            res.status(404).send('File not found');
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
