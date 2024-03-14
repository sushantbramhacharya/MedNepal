import express from "express";
import MedsRouter from "./routes/MedsRoute.js";
const PORT = 5000;
import { connect } from "mongoose";

//constants
import { DB_URL } from "./constants.js";

const app = express();

//connecting to DB
(async () => {
  try {
    await connect(DB_URL);
    console.log("Connected Successfully!!");
  } catch (err) {
    console.log(err.message);
  }
})();

app.use("/api/meds", MedsRouter);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
