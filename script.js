const button = document.getElementById("button");
const body = document.getElementById("body");
console.log(button);
console.log(body);
var i = 0;
function buttonClick() {
    document.getElementById('inc').value = ++i;
}
const fn = () =>{
  body.innerHTML += `<tr><td> <input disabled type="text" id="inc"  value= "${i}"></td><td><input contenteditable="" type="text"></td><td><input contenteditable="" type="number"></td><td><input contenteditable="" type="text"></td><td><input contenteditable="" type="number"></td><td><input contenteditable="" type="email"></td><td><button>Save</button></td></tr>`;
} 
button.addEventListener('click' , fn);
// fn();
