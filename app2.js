function myFunction(abc){
    console.log('hi')
    abc()
}

function myFunction2(){
    console.log('bye')
}




myFunction(myFunction2);
  



var numbers = [1,2,3,4,5,6,7,8,9,10];
var newNumbers = numbers.map((num)=>{
    return num*5;
})
var names = ["ali","bilal","fahad"];
var fulNames = names.map((item)=>{
    return `${item} Ahmed`;
})
console.log(fulNames);