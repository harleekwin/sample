import * as express from 'express';
import  database from '../db';
import * as mongodb from 'mongodb';

let router = express.Router();

router.get('/', (req, res) => {
  let fileId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('file').findOne(fileId).then((file)=> {
    res.json(products);
  });
});

router.get('/', (req,res) => {
  database.db.collection('file').find().toArray().then((file)=> {
    res.json(file);
  })
});

router.post('/', (req, res) => {
  let file = req.body;
  file._id = new mongodb.ObjectID(file._id);
  database.db.collection('file').save(file).then((newFile) => {
    res.json(newFile);
  })
});

export default router;
