'use strict'

const getArgument = (item) => {
  if (typeof item !== 'string' || !/[a-zа-яё]/gi.test(item)) {
    alert('Аргумент не является строкой или содержит только числовые значения')
    return
  }

  item = item.trim();
  if (item.length > 30) {
    item = item.substring(0, 30) + '...';
  }

  const textNode = document.createTextNode(item);
  document.body.append(textNode);

}

getArgument('   fvjdlkvajdраворалвоалвд 565656565 ававававалдвл  ');
