let num : number;   //this is a number, float by default
let str : string;   // this is a string
let bln : boolean;  //this is a boolean

 //this is an object
let obj : { //this is used to define the object
    num : number;
    str : string;
    bln: boolean;
} ={        //this is used to give data to the object
    num : 10,
    str: 'string',
    bln: true
};

//arrays
let arr: string[];                              //fixed type array 
let mixArray /*:any[]*/ = [2, 'wfwaf', true];   //any type array - accepts all kinds of data

//looping in an array
for(const pos of mixArray){
    console.log(pos);
}

//Enums
enum NewEnum { FIRSTVAL, SECVAL, THIRDVAL};

