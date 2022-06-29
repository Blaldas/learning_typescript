function add(n1:number, n2: number){
    return n1 + n2;
}

//let someVar: Function;
let someVar: (a:number, b:number) => number;

someVar = add;

console.log(someVar(1, 3));
