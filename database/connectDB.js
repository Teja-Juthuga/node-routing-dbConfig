const { MongoClient } = require("mongodb");

const url = "mongodb+srv://teja_071199:test@atlascluster.a4vovbu.mongodb.net/testDB?retryWrites=true&w=majority";
const client = new MongoClient(url);

const dbName = "testDB";

async function connectDB() {
    await client.connect();
    const db = client.db(dbName);
    console.log("connected to testDB");
    return db
}

exports.connectDB = connectDB;