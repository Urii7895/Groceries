import employees from "../models/employees.js";

const employedDAO={};
employedDAO.getAll=async()=>{
    return await employees.find();
}

employedDAO.getOne = async (id) => {
    return await employees.findOne({ _id: id }); // Busca por el campo _id
};



export default employedDAO;