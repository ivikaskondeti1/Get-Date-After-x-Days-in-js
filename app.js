const express = require("express");
const addday = require("date-fns");
const adddays = require("date-fns/addDays");
const app = express();

let newDate = adddays(new Date(), 100);
app.get("/", (request, response) => {
  response.send(
    `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`
  );
});
app.listen(3000);
module.exports = app;
