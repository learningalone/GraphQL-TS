import mongoose from "mongoose";

const conectDB = async () => {
  return await mongoose.connect(process.env.DB_URI)
    .then(() => {
      console.log("¡Coneccion Exitosa!");
    })
    .catch((e) => {
      console.error("Error conectando a la DB", e);
    });
};

export default conectDB;
