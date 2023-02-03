var a;         // declarando
var b= 'b';    //declaramos / asignamos
b = 'bb';      //reasignacion
var a ='aa';   // redeclaración

//Global Scope
var fruit ='Apple';

function bestFruit()
{
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Mexico';  //Variable global (forma indirecta)
    console.log(country);
}

countries();
console.log(country);