
// fetch api 
// get data

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>{
	if(!res.ok){
		const message = `Error: ${res.status}`;
		throw new Error(message)
	}
	return res.json()
})
.then(res=>console.log(res))
.catch(err=>console.log(err))



// post data 

fetch('https://jsonplaceholder.typicode.com/posts',{
	method:"POST",
	headers:{
		"Content-Type":"application/json"
	},
	body:JSON.stringify({
		title:"This is fetch api",
		body:"i am a developer",
		userId:1
	})
})
.then(res=>{
	if(!res.ok){
		const message = `Error: ${res.status}`;
		throw new Error(message)
	}
	return res.json()
})
.then(res=>console.log(res))
.catch(err=>console.log(err))


// data update 

fetch('https://jsonplaceholder.typicode.com/posts/1',{
	method:"PUT",
	headers:{
		"Content-Type":"application/json"
	},
	body:JSON.stringify({
		id:1,
		title:"This is fetch api Atiq",
		body:"i am a developer Tawhid",
		userId:1
	})
})
.then(res=>{
	if(!res.ok){
		const message = `Error: ${res.status}`;
		throw new Error(message)
	}
	return res.json()
})
.then(res=>console.log(res))
.catch(err=>console.log(err))

// single data update

fetch('https://jsonplaceholder.typicode.com/posts/1',{
	method:"PATCH",
	headers:{
		"Content-Type":"application/json"
	},
	body:JSON.stringify({
		
		title:"This is fetch api Atiq developer",
		body:"Tawhid Afraid how are you?"
	})
})
.then(res=>{
	if(!res.ok){
		const message = `Error: ${res.status}`;
		throw new Error(message)
	}
	return res.json()
})
.then(res=>console.log(res))
.catch(err=>console.log(err))

// data delete

fetch('https://jsonplaceholder.typicode.com/posts/1',{
	method:"DELETE"
})
.then(res=>{
	if(!res.ok){
		const message = `Error: ${res.status}`;
		throw new Error(message)
	}
	return res.json()
})
.then(res=>console.log(res))
.catch(err=>console.log(err))
