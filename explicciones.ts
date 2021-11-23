import conectDB from "./db/db";
import { UserModel } from "./models/user";
import { Enum_Rol } from "./models/enums";
import { ProjectModel } from "./models/project";

const main = async () => {
  await conectDB();
  ProjectModel.create({
    nombre:"Proyecto_1",
    presupuesto: 120,
    fechaInicio:Date.now(),
    fechaFin:new Date("2022/11/10")
  }).then(p=>{
    console.log('Proyecto creado', p)
  }).catch(e=>{
    console.error('Error al crear proyecto',e)
  })
};

main();

// Create
  // await UserModel.create({
  //   correo: "alejocx2@hotmail.com",
  //   identificacion: "123456",
  //   nombre: "Alejandro",
  //   apellido: "Mutzzi",
  //   rol: Enum_Rol.administrador,
  // })
  //   .then((u) => {
  //     console.log(u);
  //   })
  //   .catch((e) => {
  //     console.error("Error creando usuario", e);
  //   });
  // Reas
  //   await UserModel.find()
  //     .then((u) => {
  //       console.log(u);
  //     })
  //     .catch((e) => {
  //       console.error("Error obteniendo los usuarios", e);
  //     });
  // Update
  // await UserModel.findOneAndUpdate(
  //   // si hay varios escoge el primero
  //   {
  //     correo: "alejocx2@gmail.com",
  //   },
  //   {
  //     apellido: "Mutzzi",
  //   }
  // )
  //   .then((u) => {
  //     console.log("Usuario acutualizado");
  //   })
  //   .catch((e) => {
  //     console.error("Error al actualizar usuario", e);
  //   });
  // Remove
  // await UserModel.findOneAndRemove({
  //   correo: "alejocx2@gmail.com",
  // })
  //   .then((u) => {
  //     console.log("Usuario eliminado", u);
  //   })
  //   .catch((e) => {
  //     console.error("Error al eliminar usuario", e);
  //   });