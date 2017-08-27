'use strict';

var cartItems = [];

function renderCart () {
  if (localStorage.cartArray) {
    cartItems = JSON.parse(localStorage.cartArray);
    var cart = document.getElementById('cart');
    cart.innerHTML = '';
    for (var i = 0; i < cartItems.length; i++) {
      var productFig = document.createElement('figure');
      productFig.id = i;
      cart.appendChild(productFig);
      var figImg = document.createElement('img');
      figImg.setAttribute('src','img/' + cartItems[i].custFilePath);
      productFig.appendChild(figImg);
      var figCaption = document.createElement('figcaption');
      figCaption.innerHTML = cartItems[i].description + ' |   Quantity: ' + cartItems[i].custQuantity;
      productFig.appendChild(figCaption);
      var trashCan = document.createElement('img');
      trashCan.setAttribute('src', 'http://www.iconninja.com/files/496/493/316/delete-del-recycle-bin-garbage-full-trash-remove-icon.png');
      trashCan.setAttribute('class','trash');
      trashCan.addEventListener('click',trashIt);
      productFig.appendChild(trashCan);
    }
  }
};

renderCart();

function trashIt (event) {
  var index = parseInt(this.parentNode.id);
  cartItems.splice(index, 1);
  localStorage.cartArray = JSON.stringify(cartItems);
  renderCart();
};
