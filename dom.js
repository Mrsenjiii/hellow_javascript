


const heads = document.getElementsByTagName('h1')
const heads_ = document.getElementsByClassName('content-head')
const heads__ = document.querySelectorAll('.content-head')
console.log(heads)
console.log(heads_)
console.log(heads__)

// appending the child to a element.
// create the element 
const para = document.createElement('p')
const para_Text = document.createTextNode('Newly added Text')
para.appendChild(para_Text)
const element = document.getElementsByTagName('body')[0]
const child = document.getElementById('content-head1')
element.insertBefore( para,child )








// const child = document.getElementById("p1");
// child.parentNode.removeChild(child);






function changep(elem){
    console.log(elem)
    // 
    elem.style.backgroundColor='yellow';
}


// dom.js:8 HTMLCollection(3)
// dom.js:9 NodeList(3)
// dom.html:48 Live reload enabled.
// favicon.ico:1     Failed to load resource: the server responded with a status of 404 (Not Found)
// document.getElementById("content-head0")
// <h1 class=​"content-head" id=​"content-head0">​Welcome to the dom​</h1>​
// document.getElementById("content-head0").innerHtml
// undefined
// document.getElementById("content-head0").innerHTML
// 'Welcome to the dom'
// document.getElementById("content-head0").firstChild
// "Welcome to the dom"
// document.getElementById("content-head0").firstChild.nodeValue
// 'Welcome to the dom'
// document.getElementById("content-head0").childNodes.nodeValue
// undefined
// document.getElementById("content-head0").childNodes[0].nodeValue
// 'Welcome to the dom'
// document.getElementById("content-head0").childNodes[1].nodeValue


