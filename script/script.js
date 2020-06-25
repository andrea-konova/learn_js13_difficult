'use strict'

function DomElement(selector = '#car', height = '150px', width = '300px', bg = 'yellow', fontSize = '20px') {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.createItem = function() {
    const block = (this.selector.includes('.')) ? document.createElement('div') :
      (this.selector.includes('#')) ? document.createElement('p') : 
      console.log('Упс... Что-то пошло не так =(');
    if (this.selector.includes('.')) {
      block.className = this.selector.slice(1);
    } else if (this.selector.includes('#')) {
      block.id = this.selector.slice(1);
    }
    block.style.cssText = `
      height: ${this.height};
      width: ${this.width};
      background-color: ${this.bg};
      font-size: ${this.fontSize};
    `;
    block.innerHTML = 'Привет, мир';
    document.body.append(block);
  
};

let domElement1 = new DomElement ('.block', '50px', '100px', 'orange', '16px');

domElement1.createItem();