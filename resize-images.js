var Jimp = require("jimp");


const inputFolder = './public/content/';
const processedFolder = './public/content/gif/assets/1/';
const fs = require('fs');

const { readdirSync } = require('fs')



const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map( async dirent  => {

        const path = inputFolder+dirent.name+'/assets'
       
        console.log('start')
        fs.readdir(path, (err, files) => {
            console.log(files)
            files.forEach(file => {
                if (file.toLowerCase().endsWith(".jpg")) {
                    resizeImage(file,path);
                }
            });
        });
     



    } )



getDirectories(inputFolder)


// fs.readdir('./public/content/shisha_no_sho/assets', (err, files) => {
//   files.forEach(file => {
//     if (file.toLowerCase().endsWith(".jpg")) {
//       resizeImage(file,'./public/content/shisha_no_sho/assets');
//     }
//   });
// });


function resizeImage(fileName,path) {
  Jimp.read(path + '/' + fileName).then(function (image) {

      fileName.replace(/\.[^/.]+$/, "")
    image
        .resize(1920, Jimp.AUTO)
        .quality(60)
        .write(path +'/'+ fileName.replace(/\.[^/.]+$/, "") + '.jpg');
  }).then(function () {
    //console.log('moving filename', fileName);
        //fs.rename(inputFolder + fileName, processedFolder + fileName, function (ignore) {
    //});
  }).catch(function (e) {
    console.log(e, fileName)
  })
}