"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var db_1 = require("../db");
var mongodb = require("mongodb");
var router = express.Router();
router.get('/', function (req, res) {
    var fileId = new mongodb.ObjectID(req.params['id']);
    db_1.default.db.collection('file').findOne(fileId).then(function (file) {
        res.json(products);
    });
});
router.get('/', function (req, res) {
    db_1.default.db.collection('file').find().toArray().then(function (file) {
        res.json(file);
    });
});
router.post('/', function (req, res) {
    var file = req.body;
    file._id = new mongodb.ObjectID(file._id);
    db_1.default.db.collection('file').save(file).then(function (newFile) {
        res.json(newFile);
    });
});
exports.default = router;
