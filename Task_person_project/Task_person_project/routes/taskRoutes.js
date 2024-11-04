// implementing project routes
const { getTasks, createTask, updateTask, deleteTask } = require("../controllers/taskController");

const taskRoutes = (req,res)=>{
    if(req.method == 'get'){
        getTasks(req ,res);
    }else if(req.method == 'post'){
        createTaskkeTask(req , res)
        
    }else if  (req.method == 'PATCH'){
        updateTaskteTask(req , res)
    }else if (req.method == 'DELETE'){
        deleteTaskeTask(req,res)
    }else {
        res.writeHead(404,'not found',{'content-type':'appliction/json'})
        res.end(JSON.stringify({
            message: 'unknown method required.'

        }))
    }
}
module.exports = taskRoutes;
