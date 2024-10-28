//Loop
//for loop
// while loop
// do while loop


for(var i=0; i < 10; i++){
    console.log(i)
}

let ola_s=['Mercedes', 'Larmbogini', 'Toyota']
var i=0; 

for(var i=0; i < ola_s.length; i++){
    console.log(ola_s)

}

const person = {fname:"John", lname:"Doe", age:25};

var text = "";
for (let x in person) {
  text = text + person[x];
  console.log(text)
}


// for in loop array example

const numbers = [45, 4, 9, 16, 25];

var txt = "";
for (let x in numbers) {
  txt += numbers[x] + '\n';
  console.log(txt)
}


console.log('while start here')
var i = 0
while(i< 5){
    
    console.log(i)
   
 i++
  
}

let m=1
do{
    console.log('danchare', m)
    m++
}while(m< 5)



const cars = ["BMW", "Volvo", "Saab", "Ford"];
    for (m in cars){
        console.log(cars[m])
    }


// function

function Greet(name){

    console.log("good afternoon: ", name)

}

Greet('Andrew')

function simpleMath(operation_type){
    var x = 7
    var y = 5
    if(operation_type === 'add'){
       
        
        console.log(x+y)
    }
    else if(operation_type === 'diff'){
        console.log(x-y) 

    }
}


simpleMath('add')


const persony = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }

  const person2 = {
    firstName: "Sherif",
    lastName: "Andrew"
  }
  
  // This will return "Mary Doe":

  console.log(persony.fullName.apply(person1))
  console.log(persony.fullName.apply(person2))


 //Objects
 
 var laptop = {
  "name":'hp laptop',
  "ram":'8gb',
  "rom":"500gb",
  "os":"Window 10"
}

console.log(laptop)
console.log(laptop.os)

laptop.size = "45"
console.log(laptop)


var system ={
  "name":'hp laptop',
  "ram":'8gb',
  "rom":"500gb",
  "os":"Window 10",

  turn_on: function(){
      console.log('system on')
  },

  turn_off: function(){
      console.log('system off')
  }

}

system.turn_on()
system.turn_off()


const students = {
  'class' :'primary one',
  "total_number":56,
   "greet": function(){
      console.log('good morning')
   },

   "students": [
    {
      'name':"Andrew",
      'age':7
    },

    {
      'name':"Andrew",
      'age':9
    },
  

   ],



}

console.log(students.greet())