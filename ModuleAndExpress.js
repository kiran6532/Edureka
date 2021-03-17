var fs = require('fs')
const { stringify } = require('node:querystring')
const yargs = require('yargs')

let fileName = yargs.argv.filename
let arrayForFile = []


fs.readFile('abcFile.txt', function (err, data) {
    if (data){
        arrayForFile=data.toString();
        console.log(arrayForFile.includes(fileName))
        if(arrayForFile.includes(fileName)){
           return  console.err("already exist")

        }else{
            arrayForFile.push(fileName)
            fs.writeFile('abcFile.txt', stringify(arrayForFile), (err)=>{
                if (err)
                console.log(err)
            })
            fs.writeFile(fileName, "Filed is processing", (err )=>{
            if(err)
            throw err;
            else console.log("data is updated...")
            })
        }

    }

})