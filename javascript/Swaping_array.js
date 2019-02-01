console.log('Value before the randome number : '+name);
console.log("Calling the randome function");
swap(name);
console.log("Value after the randome number : "+name);

function swap(name){
    
    for(let i=0;i<name.length;i++)
    {
        let randomeIndex = Math.trunc((Math.random()* 3)+1);
        let temp = name[randomeIndex];
        name[randomeIndex] = name[i];
        name[i] = temp;
    }
}

