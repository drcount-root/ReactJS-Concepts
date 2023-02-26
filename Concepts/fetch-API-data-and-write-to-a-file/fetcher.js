// import fs from "fs";
const fs = require("fs");

const URL = "https://dummyjson.com/todos";

const fetcherFunc = async (URL) => {
  const response = await fetch(URL);
  const data = await response.json();
  //   console.log(data);
  const result = JSON.stringify(data);
  //   console.log(result);

  return fs.writeFile(
    "C:/Users/subha/Desktop/repos/ReactJS/ReactJS-Concepts/Concepts/fetch-API-data-and-write-to-a-file/db.json",
    result,
    (err) => {
      if (err) throw err;
      console.log(
        "\nData Fetched Successfully & written into fetcher.json file"
      );
    }
  );
};

console.log(fetcherFunc(URL));
