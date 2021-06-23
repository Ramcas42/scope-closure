var hello = 'hello';
let world = 'world';
const helloWorld = 'Hello World';


const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloWorld = () => {
    globalVar = 'I am global'
}

helloWorld();
console.log(globalVar);

const anotherFunction = () => {
    var localVar = globalVar = 'Im global';
}

anotherFunction();
console.log(globalVar);