const editor = (img, oper) => {
    setTimeout(() => {
        if(oper === 'Crop') console.log (`${img}  Cropped`);
        if(oper ===  'Resize') console.log(`${img} Resized`);
    }, 1000);
};

const callEditor = (img, oper, callback) => {
    callback(img,oper);
};

console.log(`Start Editing`);
callEditor('Pic1.png','Crop', editor);
console.log(`Finished Editing`);