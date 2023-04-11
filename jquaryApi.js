


const meakeRequst =async(url,method,data)=>{
	try{
		
		const result = await $.ajax({
			url:url,
			method:method,
			data:data
		})
		
		return result
		
		
	}catch(err){
		console.log(err)
	}
}



// get data 

const getData =()=>{
	meakeRequst("https://jsonplaceholder.typicode.com/albums","GET").then(
		
		(res)=>console.log(res)
		)
}


const postData =()=>{
	meakeRequst("https://jsonplaceholder.typicode.com/albums","POST",{
		title:"ghjjhfdfhh",
		body:"rujgdsdfghh",
		userId:1
	}).then(
		
		(res)=>console.log(res)
		)
}

const updateData =()=>{
	meakeRequst("https://jsonplaceholder.typicode.com/albums/1","PUT",{
		id:1,
		title:"ghjjhfdfhh Tawhid ---atiq",
		body:"rujgdsdfghh ----doly ",
		userId:1
	}).then(
		
		(res)=>console.log(res)
		)
}

updateData()


const updateDataOne =()=>{
	meakeRequst("https://jsonplaceholder.typicode.com/albums/1","PATCH",{
		title:"ghjjhfdfhh Tawhid Afffffridi",
		
	}).then(
		
		(res)=>console.log(res)
		)
}

updateDataOne()

const deleteData =()=>{
	meakeRequst("https://jsonplaceholder.typicode.com/albums/1","DELETE",{
	}).then(
		
		(res)=>console.log(res)
		)
}

deleteData()




