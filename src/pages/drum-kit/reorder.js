const fs = require('fs');
const os = require('os');

const file = ['王.py', '饿.py', 'b.py', '比.py', '测.py', '汪.py'];

// fs.mkdirSync('Rabbit');

// file.forEach(f => {
//   fs.writeFile(`./Rabbit/${f}`, '', (err) => {
//       if (err) {
//           console.log(err);
//           return;
//       }
//       console.log('写入成功');
//   })  
// })

// fs.readdir('./Rabbit', (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// })

const temDir = os.tmpdir();
console.log(temDir);
fs.readdir(temDir, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
})
