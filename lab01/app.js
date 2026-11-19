// 953261 Lab 1 — My first Node.js server
// Run:  npm start   then open http://localhost:3000
//
// TODO (Part D of the lab sheet):
//   1. Change the HTML in GET / to show your nickname and student ID.
//   2. Add a route  GET /api/me  that returns JSON:
//        { "name": "...", "studentId": "...", "favouriteLanguage": "..." }
//      with status 200 and Content-Type application/json.
//   3. Any other path must return status 404 with a short HTML message.
//   4. Commit after each step with a clear message, then push to GitHub.

import http from "node:http";

const PORT = 3000;
const MY_NAME = "Kaweerattana Chanapayuck";
const MY_STUDENT_ID = "692115003";
const MY_FAV_LANGUAGE = "Java";

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<h1>Hello, 953261!</h1>` + `<p>My name is ${MY_NAME} (student ID ${MY_STUDENT_ID})</p>`);
    return;
  }

  if (req.method === "GET" && req.url === "/api/me") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(
      JSON.stringify({
        name: MY_NAME,
        studentId: MY_STUDENT_ID,
        favouriteLanguage: MY_FAV_LANGUAGE,
      })
    );
    return;
  }

  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<h1>404 Not Found</h1><p>That route does not exist on this server.</p>");
});

server.listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));
