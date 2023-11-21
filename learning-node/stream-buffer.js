const http = require("http");
const fs = require("fs");
const { cwd } = require("process");

// creating a server using raw node.js

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/read-file" && req.method === "GET");
  const readAbleStream = fs.createReadStream(process.cwd() + "/text/read.txt");
  //   streaming file reading
  readAbleStream.on("data", (buffer) => {
    res.write(buffer);
  });
  readAbleStream.on("end", () => {
    res.end("hello world");
  });
});

server.listen(5000, () => {
  console.log("server is running this port");
});
