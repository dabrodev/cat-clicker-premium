// Cat Data

var model = {
  currentCat: null,
  cats: [
    {
      name: "Kitty",
      imgSrc: "img/cat1.jpg",
      counter: 0
    },
    {
      name: "Johnny",
      imgSrc: "img/cat2.jpg",
      counter: 0
    },
    {
      name: "Lucia",
      imgSrc: "img/cat3.jpg",
      counter: 0
    },
    {
      name: "Eddie",
      imgSrc: "img/cat4.jpg",
      counter: 0
    }
  ]
};

 // Controller

var octopus = {

  init: function() {
    model.currentCat = model.cats[0];

    viewList.init();
    viewCat.init();
  },

  getCurrentCat: function() {
    return model.currentCat;
  },

  getCats: function() {
    return model.cats;
  },

  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },

  incrementCounter: function() {
    model.currentCat.counter++;
    viewCat.render();
  }
};

// Views

var viewCat = {
  init: function() {
    this.catElem = document.getElementById('cat-show');
    this.catNameElem = document.getElementById('cat-name');
    this.catImageElem = document.getElementById('cat-pic');
    this.countElem = document.getElementById('cat-count');

    this.catImageElem.addEventListener('click', function(){
      octopus.incrementCounter();
    });
    this.render();
  },

  render: function() {
    var currentCat = octopus.getCurrentCat();
    this.countElem.textContent = currentCat.counter;
    this.catNameElem.textContent = currentCat.name;
    this.catImageElem.src = currentCat.imgSrc;
  }
};

var viewList = {

  init: function() {
    this.catList = document.getElementById('cat-list');
    this.render();
  },

  render: function() {
    var cat, elem, i;

    var cats = octopus.getCats();

    this.catList.innerHTML =  '';

    for (i = 0; i < cats.length; i++) {
      cat = cats[i];

      elem = document.createElement('li');
      elem.textContent = cat.name;

      elem.addEventListener('click', (function(catCopy){
        return function() {
          octopus.setCurrentCat(catCopy);
          viewCat.render();
        };
      })(cat));
      
      this.catList.appendChild(elem);
    }
  }
};

octopus.init();
