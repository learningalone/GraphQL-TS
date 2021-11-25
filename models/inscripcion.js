import mongoose from "mongoose";
import { ProjectModel } from "./project.js";
import { UserModel } from "./user.js";

const { Schema, model } = mongoose;

const inscriptionSchema = new Schema({
  estado: {
    type: String,
    enum: ["ACEPTADA","RECHAZADA"],
    required: true,
  },
  fechaIngreso: {
    type: Date,
    required: true,
  },
  fechaEgreso: {
    type: Date,
    required: true,
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});

const InscriptionModel = model("Inscripcion", inscriptionSchema);

export { InscriptionModel };
