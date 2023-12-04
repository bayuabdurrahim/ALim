// Import the fs module
const fs = require("fs");

// Create a new file
const file = fs.createWriteStream("data.json");

// Write the data to the file
file.write(`
{
  "name": "John Doe",
  "address": "Jl. Merdeka No. 1, Jakarta",
  "occupation": "Software Engineer"
}
`);

// Close the file
file.end();

// Display the data in the browser
const app = express();

app.get("/", (req, res) => {
  // Read the data from the file
  const data = fs.readFileSync("data.json");

  // Parse the data as JSON
  const parsedData = JSON.parse(data);

  // Return the data to the browser
  res.send(parsedData);
});

// Start the server
app.listen(3000);
