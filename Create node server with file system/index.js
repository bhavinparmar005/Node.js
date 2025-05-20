const http = require("http");
const fs = require("fs");
require("dotenv").config();

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Typing Animation</title>
  <style>
    body {
      background-color: #121212;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      font-family: 'Courier New', Courier, monospace;
    }

    .typing-container {
      color: #00ff88;
      font-size: 2em;
      font-weight: bold;
      border-right: 2px solid #00ff88;
      white-space: nowrap;
      overflow: hidden;
      width: 0;
      animation: typing 10s steps(50) infinite, blink 0.7s step-end infinite;
    }

    @keyframes typing {
      0% { width: 0 }
      50% { width: 46ch }
      100% { width: 0 }
    }

    @keyframes blink {
      50% { border-color: transparent }
    }
  </style>
</head>
<body>
  <div class="typing-container">
    Welcome to Node.js server with file system!!!!
  </div>
</body>
</html>
`;

// console.log(process.env.PORT);
fs.writeFile("index.html", htmlContent, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File created");
  }
});
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("index.html", "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.write(data);
        res.end();
      }
    });
  })
  .listen(process.env.PORT, () =>
    console.log(`Server is running on port ${process.env.PORT}`)
  );
