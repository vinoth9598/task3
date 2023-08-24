// How to compare two Json have the same properties withour order?
let obj1={
    Name:'vinoth',
    Age:25
}
let obj2={
    Age:25,
    Name:'vinoth'
}
let person1=(JSON.stringify(obj1));
let person2=(JSON.stringify(obj2));

if ((person1.Name===person2.Name) &(person1.Age===person2.Age) )
    {
        console.log('Two json properties are same');
    }
else
    {
        console.log('properties are not same');
    }
