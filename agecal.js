const startButton = document.getElementById('startButton');
const page2 = document.getElementById('secondDiv');
const page1 = document.getElementById('firstDiv');
const submitBtn = document.getElementById('submitButton');
const page3 = document.getElementById('thirdDiv');
const resetBtn = document.getElementById('resetButton');

startButton.addEventListener('click',function(){
    page2.classList.remove('hidden');
    page1.classList.add('hidden');
})

submitBtn.addEventListener('click',function(){
    page3.classList.remove('hidden');
    page2.classList.add('hidden');
})

resetBtn.addEventListener('click',function(){
    page1.classList.remove('hidden');
    page3.classList.add('hidden');
})

// submitButton.addEventListener('click',function(){
//     page3.classList.remove('hidden');
//     page1.classList.add('hidden');
// })



function cal() {
    let name = document.getElementById('yourName').value;
    let age = document.getElementById('yourAge').value
    let ageDays = age * 365

    if (name == '' || age == '') {
        alert ("all fields required");
    }
    else {alert (name + ',' + 'you have lived' + ageDays + 'on earth')}
}