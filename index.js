// Write your code here!

document.querySelector('main#main').remove()

let h1 = document.createElement('h1')


document.body.appendChild(h1) 

let newHeader = document.querySelector('h1')

newHeader.id = 'victory'

newHeader.innerHTML = "Taylor is the champion"