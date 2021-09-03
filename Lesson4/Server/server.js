const express = require('express')
const mongodb = require("mongodb");

const app = express();
app.use(express.json()) 


app.get('/', (req, res)=>{
    res.send('Hi Keysi')
})


let client = mongodb.MongoClient;
let url = "mongodb+srv://simon:test123@cluster0.wkrdr.mongodb.net/myFirstDatabase"

client.connect(url, function (err, client) {
    
    let db = client.db("book-store");
    let collection = db.collection("users");
    
    let query = {};
    
    let cursor = collection.find(query);
    
    cursor.forEach(
        function(doc) {
            console.log(doc);
        }, 
        function(err) {
            client.close();
        }
    );
    
});

app.listen(4000, ()=>console.log('Server is running @ 4000'))