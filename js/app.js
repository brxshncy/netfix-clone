const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectedItem(e){
   removeBorder();
   removeShow();
   this.classList.add('tab-border');
   const tabContentItem = document.querySelector(`#${this.id}-content`);
   console.log(tabContentItem);
   tabContentItem.classList.add('show');
}
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow(){
    tabContentItems.forEach(tab => tab.classList.remove('show'));
}
tabItems.forEach(item => item.addEventListener('click',selectedItem));