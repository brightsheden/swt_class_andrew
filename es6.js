//Some Es6 syntax or examples
// - Arrow function
// - desctructure
// -spread operator
// - rest operator
// - map
// - tenary operators
// - modules
// - . Template Literals



//Arrow

//Arrown function: is the shorter form of Javascript function

//old way
function greet1(){
    console.log('hello world')
}
greet1()

const greet2 = () => console.log('greet 2')

greet2()

// - desctructure

const names = ['ola', 'Andrew', 'sheyi']
const person = {
    data : {
        name : 'ola',
        age:"25",
        skills:"Developer"
    },
    address:{
        street:"123 street",
    }
}
const [name1] = names
console.log(name1)

const {data} = person
console.log(person.data)


const cars =  ['Toyota', 'Benz' , 'lambo', 'rollroyce']
console.log(cars)

const new_cars = [...cars,  'Honda', 'Bugati']
console.log(new_cars)


function add(...numbers) {
    return numbers.reduce((index, num) => index + num, 0);
}

console.log(add(1, 2, 3, 4,5, 6)); 


const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]


const fruits = ['banana', 'date', 'mango']
const  [banana,mango, ...remain] = fruits
console.log(banana,mango , remain)




// Tenary Operator
let is_admin=false
if(is_admin){
    console.log('the user is an admin user')
}else{
    console.log('The user is not ')
}

//example one 
is_admin? (console.log('the user is an admin user') )   :  console.log('invalid ')   

is_admin && (console.log('isAdmin')) && is_admin ? (console('')) : (console.log('d'))

const is_loading = true
const is_success = true

is_loading? (console.log('loading')): (console.log('sucess'))

is_success && console.log('success')



// template literal: it allow u to write javascript in a string

const school = "sokoto state"
const suffix = "University"

const school_name =  ` ${school}${suffix}`

console.log(school_name)

const add_num = (a,b)=>{
    console.log(`the answer ${a} + ${b}`)
}

add_num(3,4)





// map array method

const products = [
    {
        name:'phone',
        price:'3000',
        category:'electronics'

    },
    {
        name:'phone',
        price:'3000',
        category:'electronics'

    },
    {
        name:'iron',
        price:'3000',
        category:'electronics'

    },
    {
        name:'table',
        price:'4000',
        category:'electronics'

    }
]

const product_list = products.map((index,value )=>{
    console.log(value)
    console.log(index.name, index.category)
})

