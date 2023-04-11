

const makeRequst=async(url, config)=>{
	const res = await fetch(url, config);
	if(!res.ok){
		const message = `Error : ${res.status}`;
		
	}
	
	const data = await res.json();
	return data;
	
}


const getData =()=>{
	makeRequst('https://jsonplaceholder.typicode.com/albums')
	.then(res=>console.log(res))
	.catch(err=>console.log(err))
}

getData()




const sendData =()=>{
	makeRequst('https://jsonplaceholder.typicode.com/albums',{
		method:"POST",
		body:JSON.stringify({
			title:"I am atiq",
			body:"Tawhid Afrudi",
			userId:1
		}),
		
		headers:{
			"Content-Type":"application/json"
		}
		
		
		
	})
	.then(res=>console.log(res))
	.catch(err=>console.log(err))
}

sendData()



const uptadeData =()=>{
	makeRequst('https://jsonplaceholder.typicode.com/albums/2',{
		method:"PUT",
		body:JSON.stringify({
			id:2,
			title:"I am atiq is Software Developer",
			body:"Tawhid Afrudi is a doctor",
			userId:2
		}),
		
		headers:{
			"Content-Type":"application/json"
		}
		
		
		
	})
	.then(res=>console.log(res))
	.catch(err=>console.log(err))
}

uptadeData()

const singleUptadeData =()=>{
	makeRequst('https://jsonplaceholder.typicode.com/albums/2',{
		method:"PATCH",
		body:JSON.stringify({
			
		
			body:"Tawhid Afrudi is a doctor and good boy",
			
		}),
		
		headers:{
			"Content-Type":"application/json"
		}
		
		
		
	})
	.then(res=>console.log(res))
	.catch(err=>console.log(err))
}

singleUptadeData()

const deleteData =()=>{
	makeRequst('https://jsonplaceholder.typicode.com/albums/3',{
		method:"DELETE",
	})
	.then(res=>console.log(res))
	.catch(err=>console.log(err))
}

deleteData()