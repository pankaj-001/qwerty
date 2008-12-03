var mongodb=require('mongodb');
var sharedObj={};

sharedObj.getDbObject=function(cb){
    const MongoClient = mongodb.MongoClient;
    var url="mongodb+srv://chenchala:chenchala@cluster0-duptu.mongodb.net/os?retryWrites=true"
    MongoClient.connect(url,{ useNewUrlParser: true },(e,client)=>{
        if(e){
            console.log('connection error');
            return;
        }
       cb(client.db('os'));
    })
    
}


module.exports=sharedObj;