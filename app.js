const express = require('express')
const app = express()
const mongoose = require('mongoose')

// 設定連線到 mongoDB
mongoose.connect('mongodb://localhost/restaurantList', { useNewUrlParser: true })

// mongoose 連線後透過 mongoose.connection 拿到 Connection 的物件
const db = mongoose.connection

// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})

// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

// 載入 todo model
const RestaurantList = require('./models/restaurantList');

// 設定路由
app.get('/', (req, res) => {
  res.send('hello')
})

// 設定 express port 3000
app.listen(3000, () => {
  console.log('app is running')
})

