# recursiveAssign

Install:

run "npm install recursive-object-assign --save"

Usage:

let recursiveAssign = require('recursiveAssign'),
    a = {b:'value',c:{a:1}},
    b = {a:'hello',c:{a:'world',o:'test'}};

let result = recursiveAssign( {}, a, b };
// result = {a:'hello',b:'value',c:{a:'world',o:'test'}}
