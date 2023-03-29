// console.log()
console.log('JavaScript');
console.log(7);
console.log(true);
console.log(null);
console.log(undefined);
console.log([1, 2, 3]);
console.log({a: 1, b: 2, c: 3});

// console.error()
console.error('Error found');

// console.warn()
console.warn('Warning!');

// console.clear()
console.clear()

// console.time() & console.timeEnd()
console.time('timer');
const hello = function(){
console.log('Hello Console!');
}
const bye = function(){
console.log('Bye Console!');
}
hello(); // calling hello();
bye(); // calling bye();
console.timeEnd('timer');

// console.table()
console.table({a: 1, b: 2,c: 3});

// console.count()
for(let i=0; i<3; i++){console.count(i);}

// console.group() & console.groupEnd()
console.group('group1');
console.warn('warning');
console.error('error');
console.log('I belong to a group');
console.groupEnd();
console.log('I dont belong to any group');