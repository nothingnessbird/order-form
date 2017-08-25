'use strict';

var productFiles = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];
var customerCart = [];

function Product(name,fileLink) {
  this.name = name;
  this.fileLink = fileLink;
};

var productArray = [];

var productMaker = function () {
  for (var i = 0; i < productFiles.length; i++) {
    var fileNamer = productFiles[i].slice(0,-4);
    var fileLinker = productFiles[i];
    productArray.push(new Product(fileNamer,fileLinker));
  }
};

productMaker();

function harvestProductForm(event){
  event.preventDefault();
  var productSelected = event.target.elements.select.value;
  var productNum = event.target.elements.productNum.value;
  var custName = event.target.elements.name.value;
  var street = event.target.elements.street.value;
  var city = event.target.elements.city.value;
  var state = event.target.elements.state.value;
  var zip = event.target.elements.zip.value;
  var card = event.target.elements.card.value;
  for (var i = 0; i < productArray.length; i++) {
    if (productSelected === productArray[i].name) {
      var filePath = productArray[i].fileLink;
    }
  }
  var orderObject = {
    custProductSelected: productSelected,
    custFilePath: filePath,
    customer: custName,
    custStreet: street,
    custCity: city,
    custState: state,
    custZip: zip,
    custCard: card,
  };
  customerCart.push(orderObject);
  localStorage.cartArray = JSON.stringify(customerCart);
  event.target.reset();
}

function renderCartImage () {
  for (var i = 0; i < productArray.length; i ++){
    var imageSection = document.getElementById('cart');
    var divSection = document.createElement('div');
    imageSection.appendChild(divSection);
    var customerCart = document.createElement('img');
    customerCart.src = 'img/' + productArray[i].fileLink;
    divSection.appendChild(customerCart);
  }
};
renderCartImage();
var qty = document.createElement('p');
    // var trashCan = document.createElement('img');
    // itemPic.setAttribute('src', productArray[i]);
    // itemPic.id = productArray[i];
    // trashCan.src = 'img/trashCan.png';
    // box.appendChild(itemPic);
    // qty.innerText = 'Qty: ' + qtyArray[i];
    // box.appendChild(qty);
    // box.appendChild(trashCan);
    // position1.appendChild(box);
    // box.id = productArray[i];
    // itemPic.addEventListener('click',removeItem);

var submitStore = document.getElementById('form').addEventListener('submit', harvestProductForm);
