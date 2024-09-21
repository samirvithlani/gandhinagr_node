const roleSchema = require("../models/RoleModel")

const addRole = async(req,res)=>{


        try{

            const savedRole = await roleSchema.create(req.body)
            res.json({
                message:"role added",
                data:savedRole
            })

        }catch(err){
            res.json({
                message:"error while adding role"
            })
        }

}

const getAllRoles = async(req,res)=>{


    const roles = await roleSchema.find()
    res.json({
        message:"roles",
        data:roles
    })


}

module.exports={
    addRole,
    getAllRoles
}