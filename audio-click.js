

let len = document.querySelectorAll(".btnn").length;

for(let x = 0; x<len ; x++){

document.querySelectorAll(".btnn")[x].addEventListener("click",()=>{
	
	let text = this.innerText;
	console.log(this)
	
	switch(text){
		case "a":
			let audio = new Audio("./sounds/1.mp3")
			audio.play()
			break;
			
		case "b":
			let audio = new Audio("./sounds/2.mp3")
			audio.play()
			break;
			
		case "c":
			let audio = new Audio("./sounds/3.mp3")
			audio.play()
			break;
			
		case "d":
			let audio = new Audio("./sounds/3.mp3")
			audio.play()
			break;
	}
	
})

}