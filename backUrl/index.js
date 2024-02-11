const express=require('express')
const {mongoConnect}=require('./dbConnect')
require('dotenv').config()
const shortid = require('shortid');
const Url =require('./urlModel')
const cors=require('cors')

const app=express()
const PORT=process.env.PORT||3000
mongoConnect()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/shorten', async (req, res) => {
  let {original}=req.body
  let shortId=null
  const url=await Url.findOne({originalUrl:original})
  if(url){
    shortId=url.shortUrl
  }else{
    shortId=shortid.generate();
    await Url.create({
      originalUrl:original,
      shortUrl:shortId
    })
  }

  res.json({ original, shortId });
})
app.get('/:shortUrl',async (req, res) => {
  const {shortUrl}=req.params
  const url=await Url.findOne({shortUrl})

  console.log('any')
  if(url){
    console.log('success')
    res.json({ original:url.originalUrl })
  }else{
    console.log('error')
    res.status(404).json({ error:'Url not valid' })
  }

})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

