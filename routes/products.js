var express=require('express');
var router=express.Router();
var multer=require('multer');
var sharedObj=require('../database/db');
var objectId=require('mongodb').ObjectID;
 var fs=require('fs');
var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/images')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

var upload=multer({storage:storage});


router.post('/upload',upload.single('photo'), function (req, res) {
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });
    
      } else {
        console.log('file received');
        return res.send({
          success: true
        })
      }
});


router.post('/addProduct',function(req,res){

    sharedObj.getDbObject(function(dbObj){
        if(dbObj){
          var collection=dbObj.collection('products');   
          var data=req.body.data;
          collection.insertOne(data,function(e,r){
              if(e){
                  res.send(e);
              }else{
                  res.send(r.ops[0])
              }
          })
        }
    });
});

router.post('/updateProduct',function(req,res){
    sharedObj.getDbObject(function(dbObj){
        if(dbObj){
          var collection=dbObj.collection('products');
          var q={
              _id:objectId(req.body._id)
          }
          var newData={
              'title':req.body.title,
              'cost':req.body.cost
          }
          collection.updateOne(q,{$set:newData},function(e,r){
              if(e){
                  res.send(e);
              }else{
                  res.send(r);
              }
          })
        }
    });
});

router.get('/deleteProduct',function(req,res){
    sharedObj.getDbObject(function(dbObj){
        if(dbObj){
          var collection=dbObj.collection('products');
          var id=req.query.id;
          var q={
              _id:objectId(id)
          }
          collection.deleteOne(q,function(e,r){
            if(e){
                res.send(e);
            }else{
                res.send(r);
                fs.unlinkSync('public/images/'+id+'.jpg');
            }
          })
        }
    });
});


router.get('/myProducts',function(req,res){
    sharedObj.getDbObject(function(dbObj){
        if(dbObj){
          var collection=dbObj.collection('products');
          var q={
              'vid':req.query.id
          }
          collection.find(q).toArray(function(e,r){
              if(e){
                  res.send(e);
              }else{
                  res.send(r);
              }
          })
        }
    });
});

router.get('/allProducts',function(req,res){
    sharedObj.getDbObject(function(dbObj){
        if(dbObj){
          var collection=dbObj.collection('products');
        collection.find().toArray(function(e,r){
            if(e){
                res.send(e);
            }else{
                res.send(r);
            }
        })
        }
    });
});




module.exports=router;