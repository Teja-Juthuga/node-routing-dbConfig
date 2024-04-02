const express = require("express");

const router = express.Router();
const { connectDB } = require("../database/connectDB");

// Middleware to parse JSON bodies
router.use(express.json());

//    ============== post Communication =============

const main = async (userDetails) => {
    console.log("main() " + userDetails)
    const connection = await connectDB();
    const collection = connection.collection("testCollection");
    const result = await collection.insertOne(userDetails);
    return result;
};

router.post("/Signup", async (req, res) => {
    try {
        const result = await main({'name':'siva', 'gender' : 'male'});
        console.log(result);
        res.status(200).send("User Signed up Successfully");
    } catch (err) {
        console.log(`Error:- ${err}`);
        res.status(500).send("Internal Server Error");
        throw err;
    }
});


/*

    // =========== GET COMMUNICATION ===========
const main = async () => {
    const connection = await connectDB();
    const collection = connection.collection("testCollection");
    const result = await collection.find({}).toArray();
    return result;
};

router.get("/UserRegistration", async (req, res) => {
    try {
        const result = await main();
        console.log(result);
        res.status(200).send("Hitted UserRegistration API");
    } catch (err) {
        console.log("Error: " + err);
        res.status(500).send("Internal Server Error");
    }
});
*/
module.exports = router;
