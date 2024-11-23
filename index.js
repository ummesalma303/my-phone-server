const express = require('express')
const phones = require('./phone.json')

const app = express()
const port = 5000


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/phones',(req,res)=>{
    res.send(phones)
  })
  app.get('/phones/:id',(req,res)=>{
    const id=req.params.id

    const phone = phones.find(p=> p.id === parseInt(id)) || {}
    res.send(phone)
    console.log('i need data for id',id)
    console.log(phone)
  })

  app.listen(port, () => {
    console.log(`My phone server running port: ${port}`)
  })