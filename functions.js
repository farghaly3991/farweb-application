const path = require("path");
const fs = require("fs");
const fsX = require("fs-extra");
const cp = require("child_process");


module.exports.updateDist = async() => {
  const firstPath = path.join(__dirname, "backend", "dist");
  if(fsX.existsSync) fsX.removeSync(firstPath);
  fsX.moveSync("./dist", firstPath);
}    


module.exports.justifyIndexFile = () => {
  const name = process.argv[1];
    let title = null;
    let mobileTitle = null;
    let image = null;
    let description = null;

    fs.readFile("deploy_data.json", "utf8", (err, data) => {
      if(err) console.log(err)
      const allData = JSON.parse(data);
      const headData = allData[name];
      title = headData.title.toString();
      mobileTitle = headData.mobileTitle.toString();
      description = headData.description.toString();
      image = headData.image.toString();
      /////////////////////////////////////////////////////
      const indexFile = fs.readFileSync("backend/dist/index.html", "utf8");
      let str = indexFile.toString();
      console.log(name, description);
      //////////////////////////////////////////////////////
      const replaceable = str.split(`<meta charset=UTF-8>`)[1].split(`<meta charset=UTF-8>`)[0];
      const replacement = `
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta property=og:title content="${title}">
        <meta property=og:image content="${image}">
        <meta name=apple-mobile-web-app-title content=${mobileTitle}>
        <link rel=icon type=image/png sizes=32x32 href=${image}>
        <link rel=icon type=image/png sizes=16x16 href=${image}>
        <link rel=apple-touch-icon href=${image}>
        <link rel=mask-icon href=${image}>
        <meta name=msapplication-TileImage content=${image}>
        <meta name='Description' CONTENT='${description}'>
        `;

      const modified = str.replace(replaceable, replacement);
      fs.writeFile("backend/dist/index.html", modified, "utf8", (err, data) => {
        if(err) console.log(err);
        else {
          // resolve()
          console.log("DONE...");
        }
      })
    })
}