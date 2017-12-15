// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  insert: function (tableName, columns, columnValues, cb) {
    console.log("orm insert");
    console.log("columns = " + columns)
    console.log("column values = " + columnValues);
    var queryString = "INSERT INTO " + tableName;

    queryString += " (";
    queryString += columns.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(columnValues.length);
    queryString += ") ";
    console.log("SQL query = " + queryString);
    connection.query(queryString, columnValues, function (err, result) {
      if (err) {
        throw err;
      }
      console.log("From orm.js result" + result);
      cb(result);
    });
  },

  get: function (tableName, columns, columnValues, cb) {
    console.log("orm get");
    console.log("columns = " + columns)
    console.log("column values = " + columnValues);
    var queryString = "SELECT * FROM " + tableName;
    queryString += " WHERE user_name = ";
    queryString += printQuestionMarks(columnValues.length);
    console.log("SQL query = " + queryString);
    connection.query(queryString, columnValues, function (err, result) {
      if (err) {
        throw err;
      }

      console.log("From orm.js result" + result);
      cb(result);
    });
  },

  get1: function (tableName, columns, columnValues, cb) {
    console.log("orm get");
    console.log("columns = " + columns)
    console.log("column values = " + columnValues);
    var queryString = "SELECT * FROM " + tableName;
    queryString += " WHERE " + columns;
    queryString += " = ";
    queryString += printQuestionMarks(columnValues.length);
    console.log("SQL query = " + queryString);
    connection.query(queryString, columnValues, function (err, result) {
      if (err) {
        throw err;
      }
      console.log("From orm.js result to get user Weight Data: " + result);
      cb(result);
    });
  },

};


// Export the orm object for the model .
module.exports = orm;