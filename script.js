document.write("Hello World!")
console.log("This is a javascript tutorial")
console.warn("New lessons of javascript")
console.error("Error")
//Variable declaration
let name1="Elza"
console.log(name1)

let salary=75000
console.log(75000)
console.log(typeof(salary))

salary=90000
console.log(salary)

const pi=3.14
console.log(pi)
//cannot reassign const
//pi=3-14181
//console.log(pi)

var isValid=false
console.log(isValid)
isValid=true
console.log(isValid)

let myage
console.log(myage) //Undefined when variable not asssigned
console.log(100+200)
console.log(100-200)
console.log(100*200)
console.log(100/200)
console.log(10%5) //modulus operator
console.log(5**2)// exponential

let a=10
let b=20
let c
c=a+b
console.log(`Sum of ${a} and ${b} is ${c}`)

c=a++
console.log(c)
let d=++a
console.log(d)

let x=5
//x=x+5
x+=5
console.log(x)

y=6
y/=2
console.log(y)

//logical operators
//OR ||
//AND &&
//NOT !
let flag1=true
let flag2=false
//comparison operators
console.log(flag1==flag2) //vale comparison
console.log(flag1===flag2)//value and type

console.log((flag1!=flag2) || (2<3))
console.log((flag1!=flag2) && (2<3))

//conditonal statements
if (5>3){
    console.log("5 is greater than 3")
}
else if(5==3){
    console.log("5 isequal to 3")
}
else{
    console.log("nothing")
}

let time=new Date().getHours()
console.log(time)
if(time<12){
    console.log("Good Morning")
}
else if(time<=18){
    console.log("Good Afternoon")
}
else{
    console.log("Good Night")
}
 //loop statements
 let sum=0
for(let i=0;i<=10;i++){
    sum+=i
}
console.log(sum)

let product=1
for(let i=1;i<=10;i++){
    product*=i
}
console.log(product)

let student ={
    name:"Hari",
    age:20,
    hobby:'music'
}
console.log(student)
console.log(student.name)
console.log(student.age)

const price={
    pen:10,
    book:20,
    bag:500,
}
console.log(price.pen)
console.log(price.bag)

const names={
    animal:"dog",
    flower:"Rose",
    bird:"Parrot"
}
console.log(names.bird)
console.log(names.animal)

//functions
function add(){
    let a=10
let b=20
let c
c=a+b
console.log(`Sum of ${a} and ${b} is ${c}`)
}
add()

function addnum(num1,num2){
    return num1+num2
}
let result = addnum(42,8)
console.log(result)

//Arrays
let seasons=["winter","summer","rainy","spring"]
console.log(seasons)
    console.log(seasons[0])
    console.log(seasons[1])
        console.log(seasons[2])

for(let i=0;i<seasons.length;i++){
    console.log(seasons[i])
}