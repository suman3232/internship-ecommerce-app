const paypal = require("paypal-rest-sdk");
require("dotenv").config({ path: __dirname + '/../.env' }); // Make sure it loads .env

paypal.configure({
  mode: process.env.PAYPAL_MODE || "sandbox", // "sandbox" or "live"
  client_id: process.env.PAYPAL_CLIENT_ID || "test",
  client_secret: process.env.PAYPAL_CLIENT_SECRET || "test",
});

module.exports = paypal;
