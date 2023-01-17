const _= require('lodash')

const items = [1, [2, [3, [4]]]]
const newitems = _.flatMapDeep(items);
console.log(newitems);