class Tables {
  init(connection) {
    this.connection = connection;
    
    this.createAttendances()
  }

  createAttendances() {
    const sql = `CREATE TABLE IF NOT EXISTS Attendances 
                 (
                 id int NOT NULL AUTO_INCREMENT,
                 client varchar(50) NOT NULL,
                 pet varchar(20),
                 service varchar(20) NOT NULL,
                 dateCurrent datetime NOT NULL,
                 dateCreate datetime NOT NULL,
                 status varchar(20) NOT NULL,
                 observations text, PRIMARY KEY(id)
                 )`;

    this.connection.query(sql, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Table Attendances created with success");
      }
    });
  }
}

module.exports = new Tables();
