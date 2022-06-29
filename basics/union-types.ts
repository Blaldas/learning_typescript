type Combinable = number | string

function combine(n1: Combinable, n2: Combinable){
    if(typeof n1 === "number" && typeof n2 === "number")
        return n1 + n2;
    else 
        return n1.toString() + n2.toString();
}

const n1 = 3, n2 = 3.2;

console.log(combine(n1, n2));
console.log(combine("hello, Im under water", " please help :D"));
