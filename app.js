const formatDates = require("date-fns/format");
const express = require("express");
const app = express();
app.use(express.json());
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
let dataBase = null;
const dataBasePath = path.join(__dirname, "todoApplication.db");

const initializeDatabaseAndServer = async () => {
  try {
    dataBase = await open({
      filename: dataBasePath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server started and running at http://localhost:3000/");
    });
  } catch (error) {
    console.log(`DB Error ${error.message}`);
  }
};

initializeDatabaseAndServer();

const hasPriorityStatusAndCategeory = (requestQuery) => {
  return (
    requestQuery.priority !== undefined &&
    requestQuery.status !== undefined &&
    requestQuery.category !== undefined
  );
};
const hasPriorityProperty = (requestQuery) => {
  return requestQuery.priority !== undefined;
};

const hasStatusProperty = (requestQuery) => {
  return requestQuery.status !== undefined;
};

const hasCategoryproperty = (requestQuery) => {
  return requestQuery.category !== undefined;
};

const convertDate = (date) => {
  const formatedDate = formatDates(new Date(date));
  console.log(`${formatedDate}`);
};

date = 2014 - 1 - 21;
convertDate(2014 - 1 - 21);
