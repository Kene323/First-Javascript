// 21/05/2024
// 1.
const firstCharacter = "programming"
const secondCharacter = "HelloWorld"
const thirdCharacter = firstCharacter.slice(0,3) + secondCharacter.slice(-3)
console.log(typeof(thirdCharacter.length));
console.log(thirdCharacter.length);
console.log(thirdCharacter);

// 2.
const evenString = "Redhouse"

if(evenString.length % 2 === 0 ) {
    console.log(evenString.slice(0, evenString.length / 2));
}else{
    console.log(`${evenString} length is not even`);
}

// 3.
const fileExtension = "JavaScript.js";
const pictureExtension = "photo.png";
const htmlExtension = "index.html";
const filename = "package.json.config";


const getFileExtension =fileExtension.slice(fileExtension.lastIndexOf("."))
console.log(getFileExtension);

const getpictureExtension =pictureExtension.slice(pictureExtension.lastIndexOf("."))
console.log(getpictureExtension);

const gethtmlExtension =htmlExtension.slice(htmlExtension.lastIndexOf("."))
console.log(gethtmlExtension);

const getFilename =filename.slice(filename.lastIndexOf("."))
console.log(getFilename);

// 4.
const a = 40;
const b = 100;
const c = 30;
console.log(a === 40 || b === 100);
console.log(c === 30 || a === 40);

if(a || b === 100){
    console.log(true);
}else{
    console.log(false);
}

if(a || c === 100){
    console.log(true);
}else{
    console.log(false);
}
