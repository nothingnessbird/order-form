'use strict';

var productFiles = [['bag.jpg', 'R2D2 Luggage Bag'],['banana.jpg','Banana Slicer'] ,['bathroom.jpg','While Pooping Tablet'],['boots.jpg','Toeless Rain Boots'],['breakfast.jpg','Combo Breakfast Machine'],['bubblegum.jpg','Meatball Bubblegum'],['chair.jpg','Bubble Bottom Chair'],['cthulhu.jpg','ph\'nglui mglw\'nafh Cthulhu R\'lyeh wgah\'nagl fhtagn'],['dog-duck.jpg','Duck Beak Dog Muzzle'],['dragon.jpg','Dragon Meat'],['pen.jpg','Filthy Pen Utensils'],['pet-sweep.jpg','Animal Abuse'],['scissors.jpg','Pizza Scissors'],['shark.jpg','Shark Attack Sleeping Bag'],['sweep.png','Child Abuse'],['tauntaun.jpg','Stolen ThinkGeek Taun Taun Sleeping Bag'],['unicorn.jpg','Unicorn Meat'],['usb.gif','Wiggly USB Tentacle'],['water-can.jpg','Self Watering Can'],['wine-glass.jpg','Spill On Yourself Wine Glass']];
var customerCart = [];

function Product(name,fileLink,description) {
  this.name = name;
  this.fileLink = fileLink;
  this.description = description;
};

var productArray = [];

var productMaker = function () {
  for (var i = 0; i < productFiles.length; i++) {
    var fileNamer = productFiles[i][0].slice(0,-4);
    var fileLinker = productFiles[i][0];
    var descriptionMaker = productFiles[i][1];
    productArray.push(new Product(fileNamer,fileLinker,descriptionMaker));
  }
};

productMaker();

function harvestProductForm(event){
  event.preventDefault();
  var productSelected = document.getElementById('drop-down').value;
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
      var productDescription = productArray[i].description;
    }
  }
  var orderObject = {
    custProductSelected: productSelected,
    description: productDescription,
    custFilePath: filePath,
    custQuantity: productNum,
    customer: custName,
    custStreet: street,
    custCity: city,
    custState: state,
    custZip: zip,
    custCard: card,
  };
  if (localStorage.cartArray) {
    customerCart = JSON.parse(localStorage.cartArray);
  }
  customerCart.push(orderObject);
  localStorage.cartArray = JSON.stringify(customerCart);
  event.target.reset();
}

var submitStore = document.getElementById('form');
submitStore.addEventListener('submit', harvestProductForm);

//make select with javascript
//
