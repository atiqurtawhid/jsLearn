
//console.log(window)


const makeRequst =(method, url, data)=>{
	const xhr = new XMLHttpRequest()
//	console.log(xhr) 
//for data get 
xhr.open(method, url)
xhr.setRequestHeader('Content-Type', 'application/json')



xhr.onload=()=>{
	const data = xhr.response;
	
	console.log(JSON.parse(data))
}
// for get error methods
xhr.onerror=()=>{
	console.log("Please check error come ")
}
xhr.send(JSON.stringify(data))
	
	
	
}


// getDataFormServer


const getDataFormServer = ()=>{
	makeRequst('GET','https://jsonplaceholder.typicode.com/todos')

}


// sendDataToServer

const sendDataToServer = ()=>{
	makeRequst('POST','https://jsonplaceholder.typicode.com/todos',{
		
    title: 'foo Atiqur Rahman',
    body: 'bar Tawhid Afridi',
    userId: 1,
  
		
	})

}
const updateDataFormServer = ()=>{
	makeRequst('PUT','https://jsonplaceholder.typicode.com/todos/1',{
		
    title: 'foo Atiqur Rahman (Rubel)',
    body: 'bar Tawhid Afridi (Doly)',
    userId: 1,
  
		
	})

}



const singleDataFormServer = ()=>{
	makeRequst('PUT','https://jsonplaceholder.typicode.com/todos/1',{
		
    title: 'I am a Professional webdeveloper',
		
	})

}


const deleteDataFormServer = ()=>{
	makeRequst('DELETE','https://jsonplaceholder.typicode.com/todos/1',{
		
	})

}







sendDataToServer();
updateDataFormServer();
singleDataFormServer();
deleteDataFormServer();

getDataFormServer()