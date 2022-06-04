// Write your code here!
const topMain = document.getElementById('main');
topMain.remove();


const newHeader  = document.createElement("h1");
newHeader .setAttribute('id','victory')
newHeader .textContent = `YOUR-NAME is the champion`
document.body.appendChild(newHeader )



