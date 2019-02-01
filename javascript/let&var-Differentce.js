

a=10;//undefined error
b=10;//syntext error


if(true){
    var a=10;
}
console.log(a);//no error

if(true){
    let b=10;
}
console.log(b);//error out of scope;


