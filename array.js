

var names = ['ola','shegun','andrew','sheyi']
console.log(names[0])

//Array Methods
//Array length
//Array toString()
//Array at()
//Array join()
//Array pop()
//Array push()
//Array shift()
//Array unshift()
//Array delete()
//Array concat()
//Array copyWithin()
//Array flat()
//Array splice()
//Array toSpliced()
//Array slice()


//length
console.log(names.length)

// //Array toString(): it is used to convert an array to string
var fruits = ['Orange', 'Mango', 'Apple', 'Banana']
var fruit_tostring = fruits.toString()
console.log(fruit_tostring)


//Array at() method
var at_method = fruits.at(3)
console.log(at_method)

//var array_join = fruits.join(' and ')
//console.log(array_join)

// array pop() is use to remove the last value in an array
var array_pop = fruits.pop()
console.log(array_pop)
console.log(fruits)

var array_push = fruits.push('Date')
console.log(array_push)
console.log(fruits)

//rray shift()
//Array unshift()

//var array_shift = fruits.shift()
//console.log(array_shift)
//console.log(fruits)

var array_unshift = fruits.unshift("ola","danchare")
console.log(array_unshift)
console.log(fruits)

names.unshift("ola","danchare","mubsal","mb","oluwabunner","dangude")

//Array delete()

//Array delete()
//Array concat()

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren)

var names_fruits = fruits.concat(names)
console.log(names_fruits)
