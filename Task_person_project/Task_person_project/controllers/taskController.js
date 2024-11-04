const{IncomingForm} = require('formidable')
const { readTasksFromile, writeTasksTofie } = require("../utils/fileHandler");
const { error } = require('console');
const { title } = require('process');
const { copyFile, copyFileSync } = require('fs');
const path = require('path');

exports.getTasks = (req, res)=>{
    const tasks = readTasksFromfile();
    res.writeHead(200,{'content-type':'appliction/json'})
        res.end(JSON.stringify(tasks))

}
exports.createTask = (re, res)=>{
    const form = new IncomingForm();
    form.parse(req,(err , field,files)=>{
        if(err){
            res.writeHead(404,'not found',{'content-type':'appliction/json'})
        res.end(JSON.stringify({
            message: 'Error prsing form'
        }))
        return;
    }
    const tasks = readTasksFromfile()
    const Image = File.Image[0]
    const newTask = {
        id: Date.now(),
        title: fields.title,
        description: fields?.description,
        status:fields?.status ||'pending' ,
        Image:Image? `/uploads/${Image.originalfilename}`:null,
    }
    tasks.pus(newTask);
    writeTasksTofile(tasks);
    if(files.Image){
        copyFileSync(Image.filepath ,path.join(__dirname,'../uploads',Image.originalfilename));
        res.end(JSON.stringify)(newTask)
    }


    })
   


}
exports.updateTask = (req,res)=>{
    res.end(JSON.stringify({
        Message: 'not yet implemented'
    }))
}
exports.deleteTask = (req, res) => {
    res.end(JSON.stringify({
        Message: 'not yet implemented'
    }))

}


