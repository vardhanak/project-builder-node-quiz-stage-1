const fs = require("fs")
try {
    const olddata = fs.readFileSync('question.js')
    const newfile = fs.openSync("question.json", "w")
    const data = fs.readFileSync('question.json')
    if (data.toString().length === 0)
        fs.writeFileSync('question.json', olddata)
    else
        fs.appendFileSync('question.json', olddata)


} catch (error) {
    console.error(error.message);
}