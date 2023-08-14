const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');

const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn');

subhanAllahIncrimentBtn.addEventListener('click',function(){
    if(subhanAllahValue === 33){
        return alert ('সুবহানআল্লাহ সম্পূর্ণ। অন্য একটি পূরণ করুন')
    }
    subhanAllahValue += 1 ;
    subhanAllahDisplay.innerText = subhanAllahValue;
})



const subhanAllahDecrimentBtn = document.getElementById ('subhanAllahDecrimentBtn');

subhanAllahDecrimentBtn.addEventListener('click',function(){
    if (subhanAllahValue === 0){
        return alert ('আপনি নেগেটিভ মান যোগ করতে পারবেন না')
    }
    subhanAllahValue -= 1 ;
    subhanAllahDisplay.innerText = subhanAllahValue;
})


const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');

const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn');

alhamdulillahIncrimentBtn.addEventListener('click',function(){
    if(alhamdulillahValue === 33){
        return alert ('আলহামদুলিল্লাহ সম্পূর্ণ। অন্য একটি পূরণ করুন')
    }
    alhamdulillahValue +=  1 ;
    alhamdulillahDisplay.innerText= alhamdulillahValue;
})



const alhamdulillahDecrimentBtn =  document.getElementById('alhamdulillahDecrimentBtn');

alhamdulillahDecrimentBtn.addEventListener('click',function(){
    if (alhamdulillahValue=== 0 ){
        return alert ('আপনি নেগেটিভ মান যোগ করতে পারবেন না');
    }
    alhamdulillahValue -=   1 ;
    alhamdulillahDisplay . innerText = alhamdulillahValue;
})


const allahAkberDisplay = document.getElementById('allahAkberDisplay');

const allahAkberIncrimentBtn =document.getElementById('allahAkberIncrimentBtn') ;

allahAkberIncrimentBtn.addEventListener('click',function(){
    if(allahAkberValue === 34){
        return alert ('আল্লাহুআকবর সম্পূর্ণ। অন্য একটি পূরণ করুন');
    }
    allahAkberValue += 1 ;
    allahAkberDisplay.innerText = allahAkberValue;
})


const allahAkberDecrimentBtn=   document.getElementById('allahAkberDecrimentBtn' );

allahAkberDecrimentBtn.addEventListener('click',function(){
    if (allahAkberValue === 0 ) {
        return alert ('আপনি নেগেটিভ মান যোগ করতে পারবেন না');
    }
    allahAkberValue -= 1 ;
    allahAkberDisplay.innerText = allahAkberValue;
})

const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click',function(){
    subhanAllahDisplay.innerText = 0;
    alhamdulillahDisplay.innerText = 0;
    allahAkberDisplay.innerText = 0;
    subhanAllahValue = 0;
    alhamdulillahValue = 0;
    allahAkberValue = 0;
})

let subhanAllahValue = 0;
let alhamdulillahValue = 0;
let allahAkberValue = 0;


