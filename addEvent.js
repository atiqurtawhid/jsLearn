
let len = document.querySelectorAll(".btn").length

for( let i=0; i<len; i++){


document.querySelectorAll(".btn")[i].addEventListener("click", ()=>{
	
	 
	 let text ="Business"
	 
	document.getElementById("addHeader").innerHTML= text +  "is clicked"
	
})


}