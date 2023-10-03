const express = require('express');

const app = express();
const cors = require('cors');
const path = require('path');
const produtos = require('./produtos');
app.use(cors());

app.use(express.json());
app.use ('/static', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));





app.get('/produtos', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'index.html'));
}
);

app.get('/api/produtos', (req, res) => {
 res.send(produtos);
}
);




app.listen(3000, () => console.log('Server running on port 3000'));

