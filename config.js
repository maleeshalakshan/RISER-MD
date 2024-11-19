const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID : process.env.SESSION_ID | | undefined ? 'rWRDRSIT#sKoxRIDrH7lSSvLgpbXoE0XVajQnd7Oso7XRMrwsMvU' : process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/HgnkM7X/a14be8c0c96c8052.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello, I am YourName i am alive now!
};
