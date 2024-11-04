// fileHandler
const fs = require('fs');
const path = require('path');
const filepat = './dta/tasks.json';
exports. writeTasksTofie = (tasks)=>{
    fs.writeFileSync(filepath,JSON.stringify(tasks, null, 2))
}
exports. readTasksFromfile = ()=>{
   if(!fs.existsSync(filepath)){
        writeTasksTofie([])
    }

const data = fs.readFileSync(filepat);
return JSON.parse(data)
}
