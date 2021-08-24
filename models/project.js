
import { connectToDatabase } from '../utils/database';

class project {
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


}

module.exports = project;