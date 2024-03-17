import express from "express";
import MedsRouter from "./routes/MedsRoute.js";
import UserRoutes from "./routes/UserRoute.js";
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

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
// URL-encoded data should be strings or arrays (when extended is set to false) or objects (when extended is set to true).
app.use(express.urlencoded({ extended: true }));

app.use("/api/meds", MedsRouter);
app.use("/api/user",UserRoutes);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
