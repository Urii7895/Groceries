import customers from "../models/customers.js"

const customersDAO= {};

customersDAO.getAll = async () => {
    return await customers.find();

};

customersDAO.getOne = async (customers)=>{
    return await  customers.findOne({customers:customers});
}

customersDAO.insert = async(customers)=>{
    return await customers.create(customers);
}



customersDAO.upadateOne = async (customers)=>{
    return await customers.findOneAndUpdate({custommers:customers},customers);

}

customersDAO.deleteOne = async (customers)=>{
    return await customers.findOneAndDelete({barcode:barcode})
}








export default customersDAO;