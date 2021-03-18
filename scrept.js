
window.addEventListener('click',(event)=>{
    console.log('click');
}














let cartBody = document.getElementById('cart')
if(event.target.classList.contains('button-buy')){
console.log('клік на кнопку');
addItems(event.target);
}