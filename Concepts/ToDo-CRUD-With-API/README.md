# typicode/json-server setup

### 1. Install JSON Server

```
npm install -g json-server
```

### 2. Create a db.json file with some data

```
import fs from "fs";

const useFetch = async (n) => {
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

export default useFetch;

console.log(useFetch(9));
```

### 3. Start JSON Server

```
json-server --watch db.json
```

<br>
<br>

##### Link to [typicode/json-server](https://github.com/typicode/json-server)
