const express = require('express')
const router = express.Router()
const mongodb = require('mongodb')

let url= 'mongodb+srv://simon:test123@cluster0.wkrdr.mongodb.net/myFirstDatabase?';

router.get('/', (req, res)=>{   
    res.send([{name: 'Titanic', genre: 'Romance', rating: 13}])  
//    let movies = []
//    mongodb.Connet(url, (err, db)=>{
//        if(err) throw err
//        let cursor = db.collection('book').find()
//        cursor.forEach(book=>{
//            movies.push(book)
//        }, ()=> db.close())
//    })
  
})


module.exports = router