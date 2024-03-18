import express from "express";

//Routes
import MedsRouter from "./routes/MedsRoute.js";
import UserRoutes from "./routes/UserRoute.js";
import CartRouter from "./routes/CartRoutes.js";

//DB and ODM
import { connect } from "mongoose";

//Middlewares
import cookieParser from "cookie-parser";
import {errorHandler} from "./middlewares/errorMiddleware.js"

//constants
const PORT = 5000;
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

app.use(cookieParser());

app.use("/api/meds", MedsRouter);
app.use("/api/user",UserRoutes);
app.use("/api/cart",CartRouter);


// app.get('/', (req, res) => {
//     // Simulate an error
//     throw new Error('Test error');

// });

//using errorHandler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
