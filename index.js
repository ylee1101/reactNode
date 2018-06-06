const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ 수영아: '보고싶어' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT); 


