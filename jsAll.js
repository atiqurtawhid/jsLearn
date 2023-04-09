
/***

const myh1 = document.getElementById("myh1")
const myh2 = document.getElementById("myh2")


document.getElementById("btn").addEventListener("click",()=>{
	
	
	
	
let num = document.getElementById("inp").value
try {
  if(num==="" || num===null){
  	myh1.innerText="Not A Number"
  	myh1.style.color="red"
  }
  else if(num<5){
  	throw "This Number is Too Low"
  }
  else if (num>11){
  	throw "This Number is Too High"
  }
  
  else{
  	myh1.innerText=`Welcome This is right Number ${num}`
  	myh1.style.color="green"
  }
  
} catch (e) {
	myh1.innerText=e;
	myh1.style.color="yellow"
	
}

finally{
	myh2.innerText=" Thanks for Developers"
	myh2.style.color="gold"
}



})



const canvas1 = document.getElementById("canvas1")

const ctx = canvas1.getContext("2d")
canvas.width=window.innerWidth
canvas.height=window.innerHeight
ctx.fillStyle="white"
ctx.fillRect(10,10, 150, 50)





"use strict"

let x=30

console.log(x)

//defult paramiter

const message =(meg="Dear User This is Default value ")=>{
	console.log(meg)
}

message()


// rest paramiter


const sum =(x,y,z, n, ...m)=>{
	console.log(x,y,z,n)
	console.log(m)
}

sum(3,4,5,7,8,4,6,7,8,9,7,6,9)



const studentRoll = [5,6,7,4,8,8];
const collegeCode = [76,8,5,6,96,5]
const total = [...studentRoll, ...collegeCode, ...studentRoll]
console.log(total)

***/

// object spread operator



const student1 ={
	name:"Tawhid Afridi",
	age:"02",
	className : "two",
	id:"01"
};

const studentDetails={
	home:"bogura",
	village:"Mohastan Gor",
	Thana:"Shibgong",
	postOffce:"Mohastan"
};

const studentInfo = {...student1, ...studentDetails}
console.log(studentInfo)



function function_name(name,age) {
	return{
		name:name,
		age:age
	}
}

console.log(function_name("Tawhid", 02))




const showObject =(name,age,id)=>{
	return {
		name,
		age,
		id
	}
}

console.log(showObject("Atiq",33,24400))



// object literal



const message1 ={
	body:function (name){
		return `Hello i am object literal system one Name : ${name}`
	}
}

console.log(message1.body("Tawhid"))

const message2={
	body:(name)=>{
		return `Hello object system two Name :${name}`
	}
}

console.log(message2.body("Atiq"))

const message3={
	body(name){
		return `Hi ${name}`
	}
}

console.log(message3.body("Doly"))


const message4={
	"body name"(name){
		return `Tume Kamon Aso ${name} `
	}
}
console.log(message4['body name']("Ma"))



// array of Function 


const workers =["Aina","jomila","khairon", "mofija","rumana"];

for(let worker of workers){
	console.log(worker)
}


const developerInfo ={
	name:"Atiqur Rahman Atiq",
	id:24400,
	age:33,
	nationality:'Bangladeshi',
	languages:["Bangla","English"],
	programmingLanguage:["Javascript, Rust, Python"]
}


for(let developer in developerInfo){
	console.log(developer)
	console.log(developerInfo[developer])
	
	const value =`Key ${developer} and Values ${developerInfo[developer]}`
}

console.clear()


// for by for loop value get

let numbers = [10,20,30,40,50,60,70,80,90,100,110,120];
for(let x =0; x<numbers.length; x++)
{
	console.log(numbers[x])
}

console.clear()
// forEach value get 



numbers.forEach(myFunk)
function myFunk(x)
{
	console.log(x)
}


console.clear();

// easy way 

numbers.forEach(function(x){
	console.log(x)
})

console.clear()


// by error function



numbers.forEach((x)=>{console.log(x)})

console.clear()
// by error function so easy

numbers.forEach(x=>console.log(x))


console.clear()

 numbers.forEach(x=>{
	console.log(x)
})

console.clear()



// array number 


let squareNumbers = [];
numbers.forEach(x=>{
	squareNumbers.push(x*x)
})
console.log(squareNumbers)


numbers.forEach((x,index,arr)=>{
	arr[index]= x+5
})


console.log(numbers)


console.clear()



 const m= numbers.map(x=>{
 	return x*x
	console.log(x)
})

console.log(m)
console.clear()


numbers.map(x=>{
	console.log(x)
})


console.clear()


// array dist...ing


const numners =[1,2,3,4,5,6, 11,23,55,77,44,87,44,88,99,,7,8,6,14,9,7,8,]


const [n1,n2,n3,n4,n5,n6, ...k]=numbers;
console.log(n6, k)

console.clear()



// objects dist ...ing

const students ={
	name:"Tawhid Afridi",
	fatherNama:"Atiqur Rahman",
	matherName:"Doly Akter",
	age:02,
	id:01,
	home:"bogura",
	village:"Mohastan gorh",
	post:"mohastan",
	languages:{native:"Bangla", normal:"English"}
}


const {name, id, age, languages} = students;
const {native, normal}=languages;
console.log(name,native)

 
// function Paramiter dist ...ing


const parsons =({name,home})=>{
	console.log(name, home)
	
}


const parsons2=(parson)=>{
	const {name,id,fatherNama,matherName}=parson;
	console.log(name,fatherNama,matherName)
	
	for(let p in parson){
		console.log(parson[p])
	}
	
}



const parson = {
	name:"Tawhid Afridi",
	fatherNama:"Atiqur Rahman",
	matherName:"Doly Akter",
	age:02,
	id:01,
	home:"bogura",
	village:"Mohastan gorh",
	post:"mohastan",
	languages:{native:"Bangla", normal:"English"}
}

parsons(parson)
parsons2(parson)






const fNumbers =([m1,m2,...i])=>{
	
	console.log(m1, i)
	
}

const fNumbers2=(numners2)=>{
	const [a,b,c, ...d]=numners2
	console.log(c,d)
	for(let nu of numners2){
		console.log(nu)
	}
}




const numners2=[3,4,6,8,8,9, 14,4,6,7,8,9,4,6,6,8,]
fNumbers(numners2)
fNumbers2(numners2)


const findEventNumber = numners2.find(x=>x %2===0)
const findEventNumberIndex = numners2.findIndex(x=>x %2===0)
console.log(findEventNumber)
console.log(findEventNumberIndex)



const studentsArray = [
	{name:"x", id:1},
	{name:"y", id:2},
	{name:"z", id:3},
	{name:"m", id:4},
	{name:"n", id:1},
	{name:"kk", id:7},
	{name:"x", id:1},
	{name:"x", id:1},
	{name:"x", id:1},
	
	
	
	]
	
	
	console.log(studentsArray.find(x=>x.id>6))

console.clear()

const message = "Today is friday so that day is holly day iam working all day coding and programming it is not fun ok take a serious so your life will be happy thank";
console.log(message.startsWith("Today"))
console.log(message.endsWith("thank"))
console.log(message.includes("Today"))

console.clear()

const text1=(callback)=>{
	console.log("text1");
	callback()
	
}



const text2=(callback)=>{
	console.log("text2");
	callback()
}

const dataLoad =()=>{
	console.log("Data load Form Server Text3")
}
const text3=(callback)=>{
	setTimeout(dataLoad,3000);
//	console.log("text3")
callback()
}
const text4=(callback)=>{
	console.log("text4");
	callback()
}
const text5=(a)=>{
	console.log("text5");
	a()

}
const text6=(callback)=>{
	console.log("text6");
	callback()
}
const text7=()=>{
	console.log("text7");
}

text1(()=>{
	text2(()=>{
		text3(()=>{
			text4(()=>{
				text5(()=>{
					text6(
					 ()=>{
					 	text7()
					 }
					)
				})
			})
		})
	})
})



//callback Function  and HeierOrder Function

/*
const square =(x,y,z)=>{
	const squareValue = ` X ${x} : Y ${y} : Z ${z} and ${x*y*z}`
	console.log(squareValue)
}





const HeierOrder =(a,b,c, callback)=>{
	
	callback(a,b,c)
	
}


HeierOrder(10,20,70,square)

*/



console.clear()


// create a promise and it is Use

const promise1 = new Promise((resolve, reject)=>{
	let completedPromise = true;
	if(completedPromise){
	
	setTimeout(()=>{
	resolve("Completed Promise1 Thanks")
	},3000)
	
	}
	
	else{
		reject(new Error(`
		Promise1 Not completed 
		
		Please Try Again And Check Your 
		
		code And Api
		
		`))
	}
})
const promise2 = new Promise((resolve, reject)=>{
	let completedPromise = true;
	if(completedPromise){
		setTimeout(()=>{
resolve("Completed Promise2 Thanks")
			
			
		},2000)
	}
	
	else{
		reject(new Error(`
		Promise1 Not completed 
		
		Please Try Again And Check Your 
		
		code And Api
		
		`))
	}
})
const promise3 = new Promise((resolve, reject)=>{
	let completedPromise = true;
	if(completedPromise){
	
	setTimeout(()=>{
		
	resolve("Completed Promise3 Thanks")
		
		
	},1000)
	
	
	}
	
	else{
		reject(new Error(`
		Promise1 Not completed 
		
		Please Try Again And Check Your 
		
		code And Api
		
		`))
	}
})

/*
promise2

.then(res=>console.log(res))
.catch(err=>console.log(err.message))
.finally(console.log("Welcome"))




Promise.all([promise1,promise2,promise3])
.then(([p1,p2,p3])=>{console.log(p1)})
.catch(([e1,e2,e3])=>{console.log(e3)})



Promise.race([promise1,promise2,promise3]).then((rex)=>{
	console.log(rex)
})


*/



let tach1=()=>{
	return new Promise((resolve, reject)=>{
		resolve("resolve tach1")
	})
}

let tach2=()=>{
	return new Promise((resolve, reject)=>{
		resolve("resolve tach2")
	})
}

let tach3=()=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve("resolve tach3")
		},5000)
	})
}

let tach4=()=>{
	return new Promise((resolve, reject)=>{
		resolve("resolve tach4")
	})
}

let tach5=()=>{
	return new Promise((resolve, reject)=>{
		reject("reject tach5")
	})
}

let tach6=(h)=>{
	console.log(h)
	return new Promise((resolve, reject)=>{
		resolve("resolve tach6")
	})
}

tach1()
.then(res=>console.log(res))
.then(tach2)
.then(res=>console.log(res))
.then(tach3)
.then(res=>console.log(res))
.then(tach4)
.then(res=>console.log(res))
.then(tach5)
.then(res=>console.log(res))
.then(tach6)
.then(res=>console.log(red))
 
 
 //console.clear()


const allDataCall = async ()=>{
	try{
		const t1 = await tach1()
		console.log(t1)
		const t2 = await tach2()
		console.log(t2)
		const t3 = await tach3()
		console.log(t3)
		const t4 = await tach4()
		console.log(t4)
		const t5 = await tach5()
		console.log(t5)
		const t6 = await tach6("hello")
		console.log(t6)
	} catch(e){
		console.log(e)
	}
}

allDataCall()