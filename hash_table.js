'use strict'

const hashTable = new Map([
    ['apple', '0,67'],
    ['milk', '1,49'],
    ['avocado', '1,70']
])

console.log('hashTable', hashTable)
console.log('size', hashTable.size)

const start = new Date().getTime();
console.log('get avocado price', hashTable.get('avocado'))
const end = new Date().getTime();
console.log(`Time execution of hash table: ${end - start}ms`);
console.log('time', start, end)

// 126 page


// Map is a hash table in JS