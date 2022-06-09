const buton = document.querySelector('.buttons');
const screenup = document.querySelector('#result');
const screendown = document.getElementById('screen-down');
const ac = document.querySelector('.btn-ac');
const c = document.querySelector('.btn-c');
//clear
c.addEventListener('click',() => {screendown.innerText ='0' });

const operand = document.querySelector('.opr');
//all clear
ac.addEventListener('click',() =>{
  screenup.innerText = '';
  screendown.innerText = '0';
  operand.innerText = '';
})
// butonlar click
buton.addEventListener('click',(event) =>{
  // boş yerlere tıklama
  if(event.target== buton)return;
  


  

  
})