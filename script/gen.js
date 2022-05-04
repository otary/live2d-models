const fs = require('fs');

const path = require('path')
let file = path.resolve(__dirname, './file.txt')

let results = [];
let files = fs.readdirSync("./tinified");
files.forEach(function (file, index) {
    const name = file.replace(".png", "");
    results.push("INSERT INTO `live2d`(`name`, `thumbnail_128`, `path`) VALUES ('" + name + "', 'thumbnails/" + file + "', 'https://cdn.jsdelivr.net/gh/otary/live2d-models/v2/" + name + "/index.json');")
});

fs.writeFile(file, results.join("\n"), { encoding: 'utf8' }, err => {})

