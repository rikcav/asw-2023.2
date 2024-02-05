import express from "express";
const routes = require("./prisma/routes");

const app = express();
const port = 3000;

app.use(express.json());
routes(app);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
