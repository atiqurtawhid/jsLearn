





// get data  by axios 





 axios
.get("https://jsonplaceholder.typicode.com/albums")
.then(res=>console.log(res.data))
.catch(err=>console.log(err))


// post data by axios

 axios
.post("https://jsonplaceholder.typicode.com/albums",{
	body:JSON.stringify({
		id:1,
		title:"I am a professional developer",
		body:"Tawhid Afraid is my doctor boy",
		userId:1
	})
})
.then(res=>console.log(res.data))
.catch(err=>console.log(err))


// data update 

 axios
.put("https://jsonplaceholder.typicode.com/albums/1",{
	body:JSON.stringify({
		id:1,
		title:"I am a professional developer (shahida)",
		body:"Tawhid Afraid is my doctor boy(Doly)",
		userId:1
	})
})
.then(res=>console.log(res.data))
.catch(err=>console.log(err))

// single data update


 axios
.patch("https://jsonplaceholder.typicode.com/albums/1",{
	body:JSON.stringify({
		
		
		body:"Tawhid Afraid is my doctor boy(Doly) and (Atiqur)",
		
	})
})
.then(res=>console.log(res.data))
.catch(err=>console.log(err))






 axios
.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(res=>console.log(res.data))
.catch(err=>console.log(err))




// axios async await 


// common Function for axios all method




const makeRequst =async(config)=>{
	return await axios(config)
}

// data gate


const getData =()=>{
	makeRequst("https://jsonplaceholder.typicode.com/albums")
	.then(res=>console.log(res.data))
	.catch(err=>console.log(err))
}




// data post 

const postData =()=>{
	makeRequst({
		url:"https://jsonplaceholder.typicode.com/albums",
		method:"post",
		data:JSON.stringify({
			title:"Helllll",
			body:"hhhggjjjhh",
			userId:1
		})
	})
	.then(res=>console.log(res.data))
	.then(err=>console.log(err))
}




// data update 

const updateData =()=>{
	makeRequst({
		url:"https://jsonplaceholder.typicode.com/albums/1",
		method:"put",
		data:JSON.stringify({
			id:1,
			title:"Helllll fhjjhcxxdff",
			body:"hhhggjjjhh hhfdgjjvcxx",
			userId:1
		})
	})
	.then(res=>console.log(res.data))
	.then(err=>console.log(err))
}

// single data update 



const singleUpdateData =()=>{
	makeRequst({
		url:"https://jsonplaceholder.typicode.com/albums/1",
		method:"put",
		data:JSON.stringify({
			
			
			body:"hhhggjjjhh55665444 hhfdgjjvcxx",
			
		})
	})
	.then(res=>console.log(res.data))
	.then(err=>console.log(err))
}



const deleteDataById =()=>{
	makeRequst({
		url:"https://jsonplaceholder.typicode.com/albums/1",
		method:"delete",
		
	})
	.then(res=>console.log(res.data))
	.then(err=>console.log(err))
}

deleteDataById()