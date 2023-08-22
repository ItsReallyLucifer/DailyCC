//Given an array (arr) as an argument complete the function countSmileys
// that should return the total number of smiling faces.
// Valid smiley face examples: :) :D ;-D :~)



const SMILING = /[:;]{1}[-~]?[)D]{1}/;

const countSmileys = (faces) => faces.filter(face => SMILING.test(face)).length + ' valid faces';

console.log(countSmileys([':)', ';(', ';}', ':-D'])) // 2