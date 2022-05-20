import { Injectable } from '@angular/core';
import {Platform} from "@ionic/angular";
import {SQLite, SQLiteObject} from "@ionic-native/sqlite/ngx";

@Injectable({
  providedIn: 'root'
})
export class SQLiteService {

  private dbInstance: SQLiteObject;
  readonly dbName: string = "database.db";
  readonly dbTable: string = "favorites";

  constructor(
    private platform: Platform,
    private sqlite: SQLite
  ) {
    this.dbConnect();
  }

  dbConnect() {
    this.platform.ready().then(() => {
      this.sqlite.create({name: this.dbName, location: "default"})
        .then((sqLite) => {
          this.dbInstance = sqLite;
          this.dbInstance.executeSql(
            `CREATE TABLE IF NOT EXISTS ${this.dbTable} (
            userID TEXT, pageName TEXT
            )`, [])
            .then(() => {console.log("Executed CREATE")})
            .catch((e) => {console.log(e)});
        })
        .catch((e) => {console.log(e)});
    });
  }

  addFavorite(userID: string, pageName: string) {
    this.dbInstance.executeSql(
      `INSERT INTO ${this.dbTable} (userID, pageName) VALUES ('${userID}', '${pageName}')`, [])
      .then(() => {console.log("Executed INSERT")})
      .catch((e) => {console.log(e)});
  }

  removeFavorite(userID: string, pageName: string) {
    this.dbInstance.executeSql(
      `DELETE FROM ${this.dbTable} WHERE userID = '${userID}' AND pageName = '${pageName}')`, [])
      .then(() => {console.log("Executed DELETE")})
      .catch((e) => {console.log(e)});
  }

}
