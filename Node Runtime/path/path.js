
const path = require('path');

pathObj = path.parse(__filename)

console.log(pathObj);

console.log(path.parse('/directory/files/filename.ext'));

/* Output :
{
  root: '/',
  dir: '/home/aritra/Desktop/learnJS/learnJS/Node Runtime/path',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}
{
  root: '/',
  dir: '/directory/files',
  base: 'filename.ext',
  ext: '.ext',
  name: 'filename'
}
*/