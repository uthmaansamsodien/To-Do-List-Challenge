const add = document.querySelector("#Add")
const sort = document.querySelector("#Sort") 
const inputName = document.querySelector("#inputName")
let list = document.getElementById('list')

let array = []
// document.querySelector("#Add").onclick = function(){
//     if(document.querySelector("#inputName"))  
// }

function addItem() {
    array.push(inputName.value);

    list.innerHTML = "";
    array.forEach((item) => {
        list.innerHTML += `
        <li>`+item+`</li>
        `
    })
}

