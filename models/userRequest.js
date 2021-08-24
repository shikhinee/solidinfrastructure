import { connectToDatabase } from '../utils/database';
const users = require('./user');

class UserRequest {
  
  constructor(username, fullname, phoneNumber , passwordHash) {
    
    this.username = username;
    this.fullname = fullname;
    this.phoneNumber = phoneNumber;
    this.password = passwordHash;
  }

  async save() {

    const {db} = await connectToDatabase();  
    const user = await db.collection('users').findOne({ username: this.username });
    if (user) throw new Error('user aleady exists')
    return db.collection('userrequests').insertOne(this);
  }

  static async accept(reqUser , customeRole) {

    const {db} = await connectToDatabase();

    const userReg = await db.collection('userrequests').findOne({ username: reqUser });

    const userRegister = new users (
      userReg.username,
      userReg.fullname,
      userReg.phoneNumber,
      userReg.password,
      customeRole
    );
    db.collection('userrequests').deleteOne({ username: reqUser })
    
    return userRegister.save();
  }

  static async deny(reqUser) {

    const {db} = await connectToDatabase(); 
    return db.collection('userrequests').deleteOne({ username: reqUser })
  }

  static async fetchAll() {

    const {db} = await connectToDatabase();  
    
    return db
      .collection('userrequests')
      .find()
      .toArray()
      .then(result => {
        return result;
      })
      .catch(err => {
        console.log(err);
      });
  }  
};

module.exports = UserRequest;