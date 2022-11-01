const dateIn = document.querySelector('input#date');
const sumbitBtn = document.querySelector('input#submitBtn');
const output = document.querySelector('p');

sumbitBtn.addEventListener('click', getAndDisplay)

function getAndDisplay() {
    let date = new Date(dateIn);

    output.innerText += date;
    console.log(typeof date);
    
    output.innerText += date.toString();
    console.log(typeof date.toString());
}