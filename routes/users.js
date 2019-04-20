var express = require('express');
var router = express.Router();
var sharedObj=require('../database/db');
var objectId=require('mongodb').ObjectID;
/* GET users listing. */
router.post('/addUser',function(req,res){
    sharedObj.getDbObject(function(dbObj){
        if(dbObj){
          var data=req.body.data;
          var collection=dbObj.collection('osusers');
          collection.insertOne(data,function(e,r){
            if(e){
              res.send(e);
            }else{
              res.send(r);
            }
          })
        }
        
    });
});

router.post('/updateUser',function(req,res){
  sharedObj.getDbObject(function(dbObj){
    if(dbObj){
      var collection=dbObj.collection('osusers');
      var q={
        '_id':objectId(req.body._id)
      }
      var newData={
        'pwd':req.body.pwd,
        'email':req.body.email,
        'phone':req.body.phone
      }
      if(req.body.delAdd){
        newData.delAdd=req.body.delAdd
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

router.get('/deleteUser',function(req,res){
    sharedObj.getDbObject(function(dbObj){
      if(dbObj){
        var collection=dbObj.collection('osusers');
        var q={
          _id:objectId(req.query.id)
        }
        collection.deleteOne(q,function(e,r){
          if(e){
            res.send(e);
          }else{
            res.send(r);
          }
        })
      }
    })
})

router.post('/getUsers',function(req,res){
   sharedObj.getDbObject(function(dbObj){
    if(dbObj){
      var collection=dbObj.collection('osusers');
      var role=req.body.role; 
      var q={
        'role':role
      }
      collection.find(q).toArray(function(e,r){
        if(e){
          res.send(e);
        }else{
          res.send(r);
        }
      })
    }
   })
})

router.post('/login',function(req,res){
  sharedObj.getDbObject(function(dbObj){
   if(dbObj){
     var collection=dbObj.collection('osusers');
     var uid=req.body.uid;
     var pwd=req.body.pwd;
     var q={
       'uid':uid,
       'pwd':pwd
     }
     collection.find(q).toArray(function(e,r){
       if(e){
         res.send(e);
       }else{
         res.send(r);
       }
     })
   }
  })
})


router.post('/addOrder',function(req,res){
  sharedObj.getDbObject(function(dbObj){
    if(dbObj){
      var collection=dbObj.collection('osusers');
      var id=req.body.id;
      var product=req.body.product;
      var q={
        '_id':objectId(id)
      }
      collection.updateOne(q,{$push:{'orders':product}},function(e,r){
         if(e){
           res.send(e);
         }else{
           res.send(r);
         }
      })
    }
  });
});

router.get('/itemsList',function(req,res){
  sharedObj.getDbObject(function(dbObj){
    if(dbObj){
      var collection=dbObj.collection('osusers');
      var id=req.query.id;
      var q={
        '_id':objectId(id)
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
})

router.post('/addToCart',function(req,res){
   sharedObj.getDbObject(function(dbObj){
    if(dbObj){
        var collection=dbObj.collection('osusers');
        var id=req.body.id;
        var product=req.body.product;
        var q={
          _id:objectId(id)
        }

        collection.updateOne(q,{$push:{cart:product}},function(e,r){
            if(e){
              res.send(e);
            }else{
              res.send(r);
            }
        })
    }
   })
})

router.post('/deleteFromCart',function(req,res){
  sharedObj.getDbObject(function(dbObj){
    if(dbObj){
        var collection=dbObj.collection('osusers');
        var id=req.body.id;
        var product=req.body.product;
        var q={
          '_id':objectId(id)
        }

        collection.updateOne(q,{$pull:{cart:{_id:product._id}}},function(e,r){
          if(e){
            res.send(e);
          }else{
            res.send(r);
          }
        })
    }
  });
})




module.exports = router;
