// const express=require('express')
// const app = express();
// const cors=require('cors')
// const port=process.env.PORT || 5000;
// const categories=require('./data/categories.json')

// app.use(cors())
// app.get('/', (req , res)=>{
// res.send('Dragon is running')
// })
// app.get('/categories' , (req , res)=>{
// res.send(categories)
// })
// app.listen(port , ()=>{
//     console.log/(`Dragon api is on port:${port}`)
// })

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const news = require('./data/news.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon is running')
});

app.get('/categories', (req, res) => {
    res.send(categories);
})
app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(id)
    if (id == 0) {
        res.send(news)
    } else {
        const selectCategories = news.filter(n => parseInt(n.category_id) === id)
        res.send(selectCategories)
    }

})

app.get('/news', (req, res) => {
    res.send(news)
})
app.get('/news/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    const selectNews = news.find(n => n._id === id)
    res.send(selectNews)
})

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})