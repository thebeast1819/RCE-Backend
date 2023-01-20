const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const dirCodes = path.join(__dirname, 'codes');
if(!fs.existsSync(dirCodes)) fs.mkdirSync(dirCodes, {recursive : true});


const generateFile = async (code, language) => {
    const codeId = uuid.v4();
    const filename = `${codeId}.${language}`;
    const filepath = path.join(dirCodes, filename);
    await fs.writeFileSync(filepath, code);
    return filepath;
}

module.exports = {
    generateFile,
}