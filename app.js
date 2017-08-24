'use strict';

var productFiles = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];


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
  var productSelected = this.elements['select'].value;
  var productNum = this.elements['product-num'].value;
  var custName = parseInt(this.elements['cust-name'].value);
  var street = parseInt(this.elements['street'].value);
  var city = parseFloat(this.elements['city'].value);
  var state = parseInt(this.elements['state'].value);
  var zip = parseInt(this.elements['zip'].value);
  var card = parseFloat(this.elements['card'].value);
  for (var i = 0; i < productArray.length; i++) {
    if (productSelected === productArray[i].name) {
      filePath = productArray[i].fileLink;
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

  this.reset();
}

var submitStore = document.getElementById('form').addEventListener('submit', harvestStore);
