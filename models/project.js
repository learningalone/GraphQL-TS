import mongoose from "mongoose";
import { UserModel } from "./user.js";

const { Schema, model } = mongoose;

const projectSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  presupuesto: {
    type: Number,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  estado: {
    type: String,
    enum: ["ACTIVO", "INACTIVO"],
    default: "INACTIVO",
  },
  fase: {
    type: String,
    enum: ["INICIADO", "DESARROLLO", "TERMINADO", "NULO"],
    default: "NULO",
  },
  lider: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: UserModel,
  },
  objetivosEspecificos: {
    type: [String],
    required: true,
  },
  objetivoGeneral: {
    type: String,
    required: true,
  },
});

const ProjectModel = model("Proyecto", projectSchema);

export { ProjectModel };
