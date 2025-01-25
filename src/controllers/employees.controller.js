import employedDAO from "../dao/employees.dao.js";

const employedController={};

employedController.getAll=(req,res)=>{
    //Aqui se piden los productos al DAO
    employedDAO.getAll()
    
    .then((employed)=>{
        res.json(employed)
    })
    .catch((error)=>{
     res.json({
        data:{
            "message" : error
        }
     })
    })
};

employedController.getOne = (req, res) => {
    const { id } = req.params;  // Aquí deberías obtener el "id" del empleado, no "employee"

    employedDAO.getOne(id)  // Pasas "id" al DAO
        .then((employee) => {
            if (!employee) {
                return res.status(404).json({ message: 'Empleado no encontrado' });
            }
            res.json(employee);  // Devuelves la información del empleado
        })
        .catch((error) => {
            res.status(500).json({
                data: {
                    error: error.message || 'Error al obtener el empleado'
                }
            });
        });
};

employedController.insert= (req,res)=>{
    employedDAO.inserty(req.body)
    .then((response)=>{
        res.json({
            data:{
                message:"producto insertado ala base de a"
            }
        })
    })
    .catch((error)=>{
        res.json({
            data:({
                message:error
            })
        })
    });
};






export default employedController;