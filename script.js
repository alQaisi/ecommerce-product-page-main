var overlay=document.querySelector('.overlay');
window.addEventListener('resize',()=>{
    if(!(LightBox.classList.contains('hideChild') || LightBox.classList.contains('hidden'))){
        if(LightBox.offsetWidth<=422)
            showOverlay(LightBox);
    }else if(!(menu.classList.contains('hideChild') || menu.classList.contains('hidden'))){
        if(window.innerWidth>=700)
            showOverlay(menu);
    }
});
function cartTracing(evt){
    if(evt.target!=deleteItems && evt.target!=cartItems && evt.target!=cart && evt.target!=cartCheckout && evt.target!=cartSection && evt.target!=cartIcon){
        cart.classList.add('hidden');
        document.body.removeEventListener('click',cartTracing);
    }
}
var cartCounter=0;
var itemsNum=0;
// LightBox & Images variables,functions start
var LightBox=document.querySelector('.lightBox');
var mainImage=document.querySelector('.mainImage');
var images=document.querySelector('.images');
var images2=document.querySelector('.images2');
var thumbnail1Imgs=document.querySelectorAll('.thumbnail .thumbnailContainer');
var thumbnail2Imgs=document.querySelectorAll('.thumbnail2 .thumbnailContainer');
var previous=document.querySelector('#previous');
var next=document.querySelector('#next');
var previousLB=document.querySelector('#previousLB');
var nextLB=document.querySelector('#nextLB');
var selectedThumbnail=document.querySelector('.thumbnail .selectedThumbnail');
var selectedThumbnailLB=document.querySelector('.thumbnail2 .selectedThumbnail');
var closeLB=document.querySelector('#close');
var number=0;

// LightBox Controllers
nextLB.addEventListener('click',()=>{
    number==3?selectImage(0,'lightbox'):selectImage(number+1,'lightbox');
})
previousLB.addEventListener('click',()=>{
    number==0?selectImage(3,'lightbox'):selectImage(number-1,'lightbox');
})
//
//MainImage Controllers
next.addEventListener('click',()=>{
    number==3?selectImage(0,'normal'):selectImage(number+1,'normal');
})
previous.addEventListener('click',()=>{
    number==0?selectImage(3,'normal'):selectImage(number-1,'normal');
})
mainImage.addEventListener('click',()=>{
    selectImage(number,'lightbox');
    if(window.innerWidth>845)
        showOverlay(LightBox);
});
closeLB.addEventListener('click',()=>{
    number=images.id*1;
    showOverlay(LightBox);
})
//
thumbnail1Imgs.forEach((item,index)=>{
    item.addEventListener('click',()=>selectImage(index,'normal'))
});
thumbnail2Imgs.forEach((item,index)=>{
    item.addEventListener('click',()=>selectImage(index,'lightbox'))
});
function selectImage(img_number,type){
    number=img_number;
    if(type=="normal"){
        if(selectedThumbnail!=undefined)
        selectedThumbnail.classList.toggle('selectedThumbnail');
        selectedThumbnail=thumbnail1Imgs[img_number];
        selectedThumbnail.classList.toggle('selectedThumbnail');
        images.style.transform=`translate(${-(img_number*100)}%)`;
        images.id=img_number;
        images2.style.transform=`translate(${-(img_number*100)}%)`;
        images2.id=img_number;
    }else{
        if(selectedThumbnailLB!=undefined)
        selectedThumbnailLB.classList.toggle('selectedThumbnail');
        selectedThumbnailLB=thumbnail2Imgs[img_number];
        selectedThumbnailLB.classList.toggle('selectedThumbnail');
        images2.style.transform=`translate(${-(img_number*100)}%)`;
        images2.id=img_number;
    }
}
// LightBox & Images variables,functions End

//Inputs variables start
var amount=document.querySelector('.amount input');
var minus=document.querySelector('#minus');
var plus=document.querySelector('#plus');
var addToCart=document.querySelector('.addToCart');

plus.addEventListener('click',()=>changeAmount(1));
minus.addEventListener('click',()=>changeAmount(-1));
function changeAmount(number){
    amount.value=(amount.value*1)+number;
    if((amount.value*1)<0)
        amount.value=0;
}
addToCart.addEventListener('click',()=>{
    if(amount.value>0){
        itemsNum+=amount.value*1;
        num.textContent=itemsNum;
        num.classList.remove('hidden');
        hiddenNote.classList.add('hidden');
        cartItems.classList.remove('hidden');
        cartCheckout.classList.remove('hidden');
        quant.textContent=`$125.00 x ${itemsNum}`;
        total.textContent=`$${itemsNum*125}.00`;
        amount.value=0;
    }
})
//Inputs variables end

//Menu variables start
var menu=document.querySelector('.menuOverlay')
var menuIcon=document.querySelector('.menuIcon');
var closeMenu=document.querySelector('.closeMenu');

menuIcon.addEventListener('click',()=>{
    showOverlay(menu);
})
closeMenu.addEventListener('click',()=>{
    showOverlay(menu);
})
//Menu variables end

// Cart variables start
var cart=document.querySelector('.cart');
var cartSection=document.querySelector('.cartSection');
var hiddenNote=document.querySelector('.cartSection h4');
var cartItems=document.querySelector('.cartItems');
var cartIcon=document.querySelector('.cartIcon');
var cartCheckout=document.querySelector('.cart button');
var quant=document.querySelector('.quant');
var total=document.querySelector('.total');
var deleteItems=document.querySelector('.delete');
var num=document.querySelector('.num');

cartIcon.addEventListener('click',()=>{
    if(cart.classList.contains('hidden')){
        cart.classList.remove('hidden');
        document.body.addEventListener('click',cartTracing);
    }else{
        cart.classList.add('hidden');
        document.body.removeEventListener('click',cartTracing);
    }
      
});
deleteItems.addEventListener('click',()=>{
    if(itemsNum>1){
        itemsNum--;
        num.textContent=itemsNum;
        num.classList.remove('hidden');
        hiddenNote.classList.add('hidden');
        cartItems.classList.remove('hidden');
        cartCheckout.classList.remove('hidden');
        quant.textContent=`$125.00 x ${itemsNum}`;
        total.textContent=`$${itemsNum*125}.00`;
    }else{
        itemsNum=0;
        num.textContent="";
        num.classList.add('hidden');
        hiddenNote.classList.remove('hidden');
        cartItems.classList.add('hidden');
        cartCheckout.classList.add('hidden');
        quant.textContent=`$125.00 x ${0}`;
        total.textContent=`$${0}.00`;
    }
})
// Cart variables end

//Show items start
function showOverlay(item,type){
    if(item.classList.contains('hidden') && overlay.classList.contains('hidden')){
        item.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }else{
        if(item.classList.contains('hidden')){
            item.classList.remove('hidden');
            overlay.classList.toggle('hide');
        }else{
            item.classList.toggle('hideChild');
            overlay.classList.toggle('hide');
        }
    }
}
//Show items end