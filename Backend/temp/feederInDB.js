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
const medData=[
  {
    name: "Paracetamol",
    image: "https://via.placeholder.com/150?text=Paracetamol",
    price: 120,
    description: "Relieves pain and reduces fever",
    rating: [],
    inStock: 2,
  },
  {
    name: "Ibuprofen",
    image: "https://via.placeholder.com/150?text=Ibuprofen",
    price: 100,
    description: "Reduces inflammation, pain, and fever",
    rating: [],
    inStock: 5,
  },
  {
    name: "Aspirin",
    image: "https://via.placeholder.com/150?text=Aspirin",
    price: 80,
    description: "Used to treat pain, fever, and inflammation",
    rating: [],
    inStock: 8,
  },
  {
    name: "Ciprofloxacin",
    image: "https://via.placeholder.com/150?text=Ciprofloxacin",
    price: 150,
    description: "Antibiotic used to treat bacterial infections",
    rating: [],
    inStock: 3,
  },
  {
    name: "Diazepam",
    image: "https://via.placeholder.com/150?text=Diazepam",
    price: 200,
    description: "Treats anxiety, muscle spasms, and seizures",
    rating: [],
    inStock: 10,
  },
  {
    name: "Loratadine",
    image: "https://via.placeholder.com/150?text=Loratadine",
    price: 90,
    description: "Antihistamine used to treat allergies",
    rating: [],
    inStock: 6,
  },
  {
    name: "Omeprazole",
    image: "https://via.placeholder.com/150?text=Omeprazole",
    price: 110,
    description: "Reduces stomach acid production",
    rating: [],
    inStock: 4,
  },
  {
    name: "Prednisone",
    image: "https://via.placeholder.com/150?text=Prednisone",
    price: 130,
    description: "Reduces inflammation and suppresses the immune system",
    rating: [],
    inStock: 7,
  },
  {
    name: "Simvastatin",
    image: "https://via.placeholder.com/150?text=Simvastatin",
    price: 170,
    description: "Lowers cholesterol and triglyceride levels",
    rating: [],
    inStock: 9,
  },
  {
    name: "Metformin",
    image: "https://via.placeholder.com/150?text=Metformin",
    price: 95,
    description: "Treats type 2 diabetes",
    rating: [],
    inStock: 1,
  },
]
const insertData = async() => {
  await medData.forEach(async(med)=>{
    const medi = new medModel(med);
    const medicine = await medi.save();
  })
  
  console.log("medicine");
};

connectDb();
insertData();
