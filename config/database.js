const mongoose = require('mongoose');
require('dotenv').config();

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connection successful"))
    .catch((error) => {
        console.log("Some issue occurred");
        console.error(error.message);
        process.exit(1); // Exit the process with an error code
    });
};

// Export dbconnect function
module.exports = dbconnect;
