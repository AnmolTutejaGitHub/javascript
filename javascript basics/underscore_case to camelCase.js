// write a program that takes underscore_case and returns camelCase

const variable="anmol_tuteja";
const camelCaseArr=[];
const variableArr=variable.split("")
console.log(variableArr)

for(let i=0;i<variable.length;i++){
    if(variableArr[i]==="_"){
        continue
    }
    if(variableArr[i-1]==="_"){
       camelCaseArr.push(variableArr[i].toUpperCase());
    }
    else{
        camelCaseArr.push(variableArr[i]);
    }
}
console.log(camelCaseArr.join(""))

// for (const n of variable){

//     if (n ==='_'){
//         continue;
//     }

//     camelCaseArr.push(n);
// }
//console.log(camelCaseArr.join(""))
