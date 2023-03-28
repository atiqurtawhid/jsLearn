
// same value add 


let sum1 = parseInt(prompt("Enter First Number "))
let sum2 = parseInt(prompt("Enter Secomd Number "))

for (let n =0; n<sum1 ; n++){
	sum2 = n + sum2
}

document.write(sum2)







let sum1 = parseInt(prompt("Enter First Number "))
let sum2 = parseInt(prompt("Enter Secomd Number "))

for (let n =0; n<sum1 ; n++){
	sum2 = n + sum2
}

document.write(sum2)


let sum4 = 0;


for(let x=0; x<5; x++){
	

let sum1 = parseInt(prompt("Enter First Number "))
let sum2 = parseInt(prompt("Enter Secomd Number "))

let sum3 = sum1+sum2;
sum4 = sum3+ sum4
	
}

document.write(sum4)





let number = Number(prompt("Enter a Namber ...."))



if(number>0){
	console.log("Positive")
}

else if(number<0){
	console.log("Negative")
}

else{
	console.log("Zeros")
}




let result = number >0 ? "Positive": number<0? "Negative":"Zeros"
console.log(result)





const results = number > 20 ? "Big Numbers": number < 20 ? "Small Number": number === 0 ? "Zeros Number":"Not A Numbr"
console.log(results)
I



function square (sum)
{
	
	const result = sum*sum
	return result

}





(function show(meg, number, add=10){
	console.log(meg)
	console.log(number+add)
})("Hello World", 40,50)



const display = function message(name)
{console.log(name)}
display("Tawhid Afridi")


var names = new Array()

names[0]="Tawhid";
names[1]="Doly";
names[2]="Atiq";

console.log(names)



const price = [48,67,86,45,98,94,77,37,87,83,47,84,98];

let total = 0;

for (let i = 0; i<price.length ; i++)
{

console.log(price[i])
total= total+price[i]
console.log(total)

}


let persons = [
  {
    name: "John",
    age: 25,
    gender: "Male",
    occupation: "Engineer"
  },
  {
    name: "Mary",
    age: 32,
    gender: "Female",
    occupation: "Doctor"
  },
  {
    name: "David",
    age: 18,
    gender: "Male",
    occupation: "Student"
  },
  {
    name: "Sarah",
    age: 47,
    gender: "Female",
    occupation: "Teacher"
  },
  {
    name: "Tom",
    age: 36,
    gender: "Male",
    occupation: "Lawyer"
  },
  {
    name: "Emily",
    age: 29,
    gender: "Female",
    occupation: "Software Developer"
  },
  {
    name: "Alex",
    age: 41,
    gender: "Male",
    occupation: "Manager"
  },
  {
    name: "Grace",
    age: 23,
    gender: "Female",
    occupation: "Marketing Specialist"
  },
  {
    name: "Daniel",
    age: 31,
    gender: "Male",
    occupation: "Accountant"
  },
  {
    name: "Linda",
    age: 56,
    gender: "Female",
    occupation: "CEO"
  },
  {
    name: "Jacob",
    age: 19,
    gender: "Male",
    occupation: "Student"
  },
  {
    name: "Olivia",
    age: 27,
    gender: "Female",
    occupation: "Graphic Designer"
  },
  {
    name: "Michael",
    age: 44,
    gender: "Male",
    occupation: "Sales Manager"
  },
  {
    name: "Sophia",
    age: 33,
    gender: "Female",
    occupation: "Human Resources Specialist"
  },
  {
    name: "Robert",
    age: 22,
    gender: "Male",
    occupation: "Customer Service Representative"
  },
  {
    name: "Emma",
    age: 38,
    gender: "Female",
    occupation: "Project Manager"
  },
  
  {
    name: "William",
    age: 49,
    gender:"Female",
    occupation:"Programmer",

},
]

console.log(persons[0].name)


let num = new Array()

for(let i =0; i<5; i++){
	num[i]=parseInt(prompt(" Enter Name"))
}



let sum = 0;
for(let i =0; i<5; i++){
	sum = sum+num[i]
}






function higherScore (score){
	let max = score[0]
	for(let x = 1; x<score.length; x++){
		if(max < score[x]){
			max = score[x]
		}
	}
	
	
}




const score = [33,76,56,83,64,07,23,765,44, 98,67,98,456,90,567,775,]
higherScore(score)




function higherScorePlayername(playInfo)
{
	let higherScorer = playInfo[0][0]
	let higherScore = playInfo[0][1]
	
	for(let x = 1; x<playInfo.length; x++){
		if(higherScore<playInfo[x][1]){
			higherScore = playInfo[x][1]
			higherScorer= playInfo[x][0]
		}
	}
	
	return higherScorer && higherScore
  
	
		
	
	
}


const playInfo = [
	["shojon", 50],
	["badsha", 48],
	["shakil", 84],
	["azim", 86],
	["aminur", 94],
	["liton", 93],
	
	]
	
	
	const t = higherScorePlayername(playInfo)
	console.log(t)
