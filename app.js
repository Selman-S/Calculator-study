const buton = document.querySelector('.buttons');
const screenup = document.querySelector('#result');
const screendown = document.getElementById('screen-down');
const ac = document.querySelector('.btn-ac');
const c = document.querySelector('.btn-c');

let result;
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
  //numberlara tıkladığında çalış
  if(event.target.classList.contains('number')){

    // alt 0 ise çalış boşalt
    
    if(screendown.innerText == '0'){
      screendown.innerText ='';
    }

    // tuşa basınca alta yazdır

    screendown.innerText += event.target.innerText;
    
  }
  
  
 
  
  // operanda basınca çalış
   if(event.target.classList.contains('operation')){
     //eğer üst boşsa çalış
     if(screenup.innerText == ''){
       
      //altı üste yazdır  operandı yazdır altı sıfırla

         screenup.innerText = screendown.innerText;
         document.querySelector('.opr').innerText = event.target.innerText;
         screendown.innerText = '0';
       
       
       
      }
      
      if(operand.innerText==''){
        operand.innerText = event.target.innerText
      }
     if(screenup.innerText && screendown.innerText != '0'){
       hesapla();
       screendown.innerText = '0';
       operand.innerText =event.target.innerText;
     }
   
  
     
    
   }
  
  
  // eşittire basınca
  
  if(event.target.classList.contains('btn-result')){
    if(screendown.innerText == '0'){
      operand.innerText ='';
    }else {

      hesapla();
      document.querySelector('.opr').innerText = '';
      screendown.innerText = '0';
    }
    
    }

    
    
    
    
    
    
    
    







    



  })
  function hesapla(){
    const operat= document.querySelector('.opr').innerText;
    // if(screendown.innerText == '')
    const hes1 = parseFloat(document.querySelector('#screen-down').innerText);
    const hes2 = parseFloat(document.querySelector('#result').innerText);
    let result ;
    switch (operat) {
      case '+':
        result = hes2+hes1;
        break;
    case '-':
        result = hes2-hes1;
        break;
    case '/':
        result = hes2/hes1;
        break;
    case '*':
        result = hes2*hes1;
        break;
    
      }
    screenup.innerText = String(result.toFixed(2)) ;
      
   
    
  //  if (String(result)) {
     
  //  }


  }


  


  
