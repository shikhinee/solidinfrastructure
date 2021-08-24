
import { connectToDatabase } from '../utils/database';

class user {
  constructor(username, fullname, phoneNumber, passwordHash , customRole, bankName, bankNumber) {
    this.username = username;
    this.fullname = fullname;
    this.phoneNumber = phoneNumber;
    this.password = passwordHash;
    this.role = customRole;
    this.bankName = bankName;
    this.bankNumber = bankNumber;
    this.timeLog = [];
  }

  async save() {
    const {db} = await connectToDatabase();
    return db.collection('users').insertOne(this);
  }

  static async saveBank(reqUsername, bankName, bankNumber) {
    const {db} = await connectToDatabase();
    return db.collection("users").updateOne(
        { username: reqUsername }, 
        { $set: {bankName: bankName, bankNumber: bankNumber} }
    );
  }

  static async timeLog(reqUserName) {

    const {db} = await connectToDatabase();

    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes();

    return db.collection("users").updateOne(
      { username: reqUserName}, 
      { $push: 
        { timeLog: {
          Date: date,
          ArrivalTime: time
          } 
        } 
      } 
    )  
  }

  static async fetch(reqUserName) {

    const {db} = await connectToDatabase();
    return db.collection('users').findOne({ username: reqUserName });
  }


}

module.exports = user;