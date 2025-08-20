import express from 'express';
import sum from './sum.js';
const app = express();
const port = process.env.PORT || 3000;

app.get('/home', (req, res) =>{
    res.send('Welcome to the Home Page');
})

app.get('/getSum/:a/:b', (req, res) =>{
    const {a, b} = req.params;
    res.json({
        ans: sum(parseInt(a), parseInt(b))
    });
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})