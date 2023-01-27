const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const outputPath = path.join(__dirname, "output");
if (!fs.existsSync(outputPath)) fs.mkdirSync(outputPath, { recursive: true });

const execCpp = (filepath) => {
  const outputId = path.basename(filepath).split(".")[0];
  const outPath = path.join(outputPath, `${outputId}.out`);
  return new Promise((resolve, reject) => {
    exec(
      `g++ ${filepath} -o ${outPath} && cd ${outputPath} && bash -c ./${outputId}.out`,
      (err, stdout, stderr) => {
        if (err) reject({ err, stderr });
        if (stderr) reject({ stderr });
        resolve(stdout);
      }
    );
  });
};

module.exports = {
  execCpp,
};
