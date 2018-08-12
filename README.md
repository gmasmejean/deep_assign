# recursiveAssign
[![npm version](https://badge.fury.io/js/recursive-object-assign.svg)](https://badge.fury.io/js/recursive-object-assign)

Install:

run "npm install recursive-object-assign --save"

Usage:

let recursiveAssign = require('recursive-object-assign'),
    a = {b:'value',c:{a:1}},
    b = {a:'hello',c:{a:'world',o:'test'}};

let result = recursiveAssign( {}, a, b };
// result = {a:'hello',b:'value',c:{a:'world',o:'test'}}
