const express = require("express");
const router = express.Router();
const { connectDB } = require("../database/connectDB");

const main = async () => {
    const connection = await connectDB();
    const collection = connection.collection("testCollection");
    const result = await collection.findOne({});
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

module.exports = router;
