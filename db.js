"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connectionString = 'mongodb://webuser:P@ssw0rd1@ds064299.mlab.com:64299/mwhitedb2017';
var mongodb = require("mongodb");
var Database = (function () {
    function Database() {
    }
    Database.connect = function () {
        var _this = this;
        return mongodb.MongoClient.connect(connectionString).then(function (db) {
            _this.db = db;
        }).catch(function (err) {
            console.error(err);
        });
    };
    return Database;
}());
exports.default = Database;
