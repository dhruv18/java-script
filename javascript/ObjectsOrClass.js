///simple object
let student = {

    name:"dhruv",
    age :"15",
    classs :"b"
};
console.log(" Name form Object student " +student.name);

///pass object to function

function dhruv(student)
{
    student.name = "kishan";
    
}

dhruv(student);

console.log(" Name form Object student " +student.name);



///array of objects


let student2 = [
        {
            name:"dhruv",
            age:15
        },
        {
            name:"kishan",
            age : 17
        }
];

console.log("Student array object o index "+student2[0].name+" age->"+student2[0].age +". And 1 index is "+student2[1].name+" age->"+student2[1].age);
