const connectionString:string = 'mongodb://webuser:P@ssw0rd1@ds064299.mlab.com:64299/mwhitedb2017';

import * as mongodb from 'mongodb';

export default class Database {
  public static db:mongodb.Db;

  public static connect() {
    return mongodb.MongoClient.connect(connectionString).then((db) => {
      this.db = db;
    }).catch((err) => {
      console.error(err);
    });
  }
}
