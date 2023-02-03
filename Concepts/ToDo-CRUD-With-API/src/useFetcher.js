import fs from "fs";

const useFetcher = async (n) => {
  const response = await fetch(`https://randomuser.me/api/?results=${n}`);
  const data = await response.json();
  const result = JSON.stringify(data);

  return fs.writeFile("../db/db.json", result, (err) => {
    if (err) throw err;
    console.log(
      "\n\n--------------- API data fetched successfully ---------------\n\n------------------ The file has been saved ------------------\n\n"
    );
  });
};

export default useFetcher;

console.log(useFetcher(9))