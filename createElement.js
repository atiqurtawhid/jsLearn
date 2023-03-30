
const myDiv = document.getElementById("my-div")
const heading1= document.createElement("h1")
const text = document.createTextNode("I AM PROGRAMMER")
heading1.appendChild(text)
myDiv.appendChild(heading1)
heading1.style.color="red"


const heading2 = document.createElement("h2")
heading2.innerText="I AM DEVELOPER"
myDiv.appendChild(heading2)


const heading3 = document.createElement("h3")
heading3.innerText="I AM CODER"
myDiv.insertBefore(heading3, heading1)

const myDiv2 =document.createElement("div")


myDiv2.innerHTML=`

<h2>Hello 'Bangladesh'</h2>
<h3>Hello Tawhid </h3>
<h4>Hello Doly</h4>
<h5> Hello My Ma</h5>
<p>Hello My Baba </p>
<h6> Hello My Sister</h6>

`


myDiv.appendChild(myDiv2)