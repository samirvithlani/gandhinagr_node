const ageMiddleware = (req,res,next)=>{


    const age= req.body.age;
    if(age){

        if(age>=18){
            next()
        }
        else{
            res.json({
                message:"Age should be greater than 18"
            })
        }


    }else{

        res.json({
            message:"Age is required"
        })


    }


}
module.exports=ageMiddleware;