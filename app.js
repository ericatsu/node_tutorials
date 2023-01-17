const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');

const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, "n/", second);

writeFileSync('./content/result-sync.txt', `Here is my result: ${first}, ${second}`, {flag: 'a'});