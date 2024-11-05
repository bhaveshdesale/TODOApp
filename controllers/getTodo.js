const Todo=require('../models/Todo');

//define route handler

exports.getTodo= async (req,res)=>{
    try{
              //fetch all todo items from database
              //mngoose library provide various functions like find one and findoneanddelete etc
              const todos=await Todo.find({});

              //response
              res.status(200)
              .json({
                success:true,
                data:todos,
                message:"Entries Todo Data is fetched"
              });
    }
    
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            data:"Internal server error",
            message:err.message,
        })
       

    }
}

//for getting single data with an id
// Import the Todo model


exports.getTodoById = async (req, res) => {
    try {
        // Extract todo item based on id
        const id = req.params.id;
        const todo = await Todo.findById(id);

        // Data for given id not found
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No data found with the given id"
            });
        }

        // Data for given id found
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully found`
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message,
        });
    }
};
