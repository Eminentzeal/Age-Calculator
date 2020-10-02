const startButton = document.getElementById('startButton');
const page2 = document.getElementById('secondDiv');
const page1 = document.getElementById('firstDiv');
const submitBtn = document.getElementById('submitButton');
const disName = document.querySelector('.disName');
const disAge = document.querySelector('.disAge');
const disDays = document.querySelector('.disDays');
const page3 = document.querySelector('#lastMessage');

startButton.addEventListener('click',function(){
    page2.classList.remove('hidden');
    page1.classList.add('hidden');

})

submitBtn.addEventListener('click',function(){

    let name = document.getElementById('yourName').value;
    let age = document.getElementById('yourAge').value
    let ageDays = age * 365;

    if (name == '' || age == '') {
        alert("all fields required");
        return;
    }
    else {
        console.log(ageDays);
        disName.textContent = 'Congratulations ' + name + '!!!';
        disAge.textContent = 'You ' + 'are ' + age + ' years old '
        disDays.textContent = 'You ' + 'have ' + 'lived ' + 'for ' + ageDays + ' days ' + 'on earth.'; 
    }

  
    page2.classList.add('hidden');
    page3.classList.remove('hidden');
})


   