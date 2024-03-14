import { connect } from "mongoose";
import { DB_URL } from "../constants.js";
import { medModel } from "../models/medModel.js";

const connectDb = async () => {
  try {
    await connect(DB_URL);
    console.log("Connected Successfully!!");
  } catch (err) {
    console.log(err.message);
  }
};
const insertData = async () => {
  const med = new medModel({
    name: "Mandal",
    image:
      "https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 120,
    description: "Mandal 700mg",
    rating: [
      {
        rater: "ratername",
        rate: 5,
      },
      {
        rater: "ratername",
        rate: 5,
      },
    ],
    inStock: 2,
  });
  const medicine = await med.save();
  console.log(medicine);
};

connectDb();
insertData();
