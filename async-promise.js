const { readFile, writeFile } = require('fs').promises
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


// getText('./content/first.txt').then((result) => console.log(result)).catch((err) => console.log(err))

const start = async () => {
    try {
        first = await readFile('./content/first.txt', 'utf8');
        second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-mind-grenade.txt', `THIS A NEW FILE: ${first}  ${second}`)
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }