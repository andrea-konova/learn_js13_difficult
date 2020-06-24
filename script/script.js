'use strict'

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.createItem = function() {
  if (this.selector == '.block') {
    const div = document.createElement('div');
    div.className = this.selector;
    div.style.height = this.height;
    div.style.width = this.width;
    div.style.backgroundColor = this.bg;
    div.style.fontSize = this.fontSize;
    div.innerHTML = 'Как жизнь?';
    document.body.append(div);
  }
  if (this.selector == '#block') {
    let p = document.createElement('p');
    p.id = this.selector;
    p.style.height = this.height;
    p.style.width = this.width;
    p.style.backgroundColor = this.bg;
    p.style.fontSize = this.fontSize;
    p.innerHTML = 'Привет, мир';
    document.body.append(p);
  }
  
};

let domElement1 = new DomElement ('#block', '50px', '100px', 'green', '16px');

domElement1.createItem();