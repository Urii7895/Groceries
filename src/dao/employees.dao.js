import employees from "../models/employees.js";

const employedDAO={};
employedDAO.getAll=async()=>{
    return await employees.find();
};


employedDAO.getOne = async (id) => {
    return await employees.findOne({ _id: id }); // Busca por el campo _id
};
employedDAO.insert = async (employeeData) => {
    return await employees.create(employeeData); // Aquí, `Employee` es tu modelo de Mongoose
};

employedDAO.updateOne = async (employeeData, _id) => {
    return await employees.findOneAndUpdate(
        { _id: _id }, // Filtro para encontrar el documento
        employeeData, // Datos para actualizar
        { new: true } // Devuelve el documento actualizado
    );
}

employedDAO.deleteOne = async(_id)=>{
    return await employees.findOneAndDelete({_id:_id});
};


export default employedDAO;